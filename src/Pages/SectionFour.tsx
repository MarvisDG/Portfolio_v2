import ProjectsSection from '@/Components/ProjectSection';
import ExperienceSection from '@/Components/ExperienceSection';

export default function SectionFour() {
  return (
    <main>
      {/* Hero with Samurai Theme */}
      {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/50 to-red-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/samurai-bg.jpg')] opacity-20" />
        <div className="text-center z-10 max-w-4xl mx-auto p-8 glass rounded-3xl animate-float">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            SamurAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Mastering UI/UX with Precision & Honor</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="glass px-8 py-4 rounded-2xl text-lg hover:bg-white/20">View Projects</a>
            <a href="/resume" className="glass px-8 py-4 rounded-2xl text-lg border hover:bg-white/20">Get Resume</a>
          </div>
        </div>
        <div className="absolute top-20 right-10 glass p-4 rounded-xl animate-float">
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">10K+</div>
              <div>Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">50+</div>
              <div>Projects</div>
            </div>
          </div>
        </div>
      </section> */}
      <ProjectsSection />
      <ExperienceSection />
      {/* Add Contact/About pages similarly */}
    </main>
  );
}

