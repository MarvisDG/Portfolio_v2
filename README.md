# Portfolio Website - Next.js + TypeScript + Tailwind CSS

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Advanced animations
- **AOS (Animate On Scroll)** - Scroll animations
- **Responsive Design** - Mobile-first approach

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── Components/       # Reusable React components
├── Pages/            # Page-specific components
├── lib/              # Utility functions
└── assets/           # Static assets (images, icons)

public/
└── assets/           # Public assets served by Next.js
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, AOS
- **Icons**: Bootstrap Icons, Lucide React

## Build and Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

For production builds:

```bash
npm run build
npm run start
```
