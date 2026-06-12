import { useEffect, useState } from 'react';

// Replace with your GitHub username
const GITHUB_USERNAME = 'Umohmarvelous';
// You need to create a GitHub personal access token (PAT) with public access
// and set it here. NEVER commit your token to a public repo!
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const QUERY = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

export default function GithubContributions() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query: QUERY }),
    })
      .then(res => res.json())
      .then(data => {
        const total = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions;
        if (typeof total === 'number') {
          setCount(total);
        } else {
          setError('Could not fetch contributions');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch contributions');
        setLoading(false);
      });
  }, []);

  return (
    <div className="github-contributions">
      {loading && <span>Loading...</span>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {count !== null && !loading && !error && (
        <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>{count}</span>
      )}
    </div>
  );
}
