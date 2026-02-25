export const personal = {
  name: 'Alex Johnson',
  role: 'Software Engineer',
  tagline: 'I build fast, scalable, and beautiful software.',
  bio: `I'm a software engineer with a passion for crafting high-quality, user-centric applications. I specialize in full-stack development with a strong emphasis on clean architecture and developer experience.

Currently open to new opportunities where I can contribute, grow, and continue pushing the boundaries of what great software looks like.`,
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resumeUrl: '#',
}

export const projects = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    description:
      'A real-time analytics platform for SaaS metrics — revenue, churn, MRR — with live WebSocket updates and multi-tenant support.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Orbit API Gateway',
    description:
      'A lightweight, high-throughput API gateway built in Go with rate limiting, JWT authentication, and request tracing.',
    tags: ['Go', 'Redis', 'Docker', 'gRPC'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Palette UI',
    description:
      'An open-source component library with 40+ accessible, composable React components built with Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'DeployKit CLI',
    description:
      'A developer CLI tool that automates zero-downtime deployments to AWS with a single command.',
    tags: ['Node.js', 'AWS', 'Shell', 'Terraform'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Prisma', 'Elasticsearch'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Vercel',
    period: '2024 — Present',
    description:
      'Lead development of the deployment pipeline infrastructure serving 10M+ builds/month. Reduced cold-start latency by 40% through edge caching optimizations.',
    tags: ['Go', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    id: 2,
    role: 'Software Engineer II',
    company: 'Stripe',
    period: '2022 — 2024',
    description:
      'Built and maintained core billing APIs used by 500K+ merchants. Contributed to the migration from a monolith to a microservices architecture.',
    tags: ['Ruby', 'React', 'PostgreSQL', 'gRPC'],
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Linear',
    period: '2021 — 2022',
    description:
      'Developed real-time collaboration features for the project management tool. Implemented conflict-free replicated data types (CRDTs) for offline sync.',
    tags: ['TypeScript', 'React', 'WebSockets', 'GraphQL'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Freelance',
    period: '2019 — 2021',
    description:
      'Delivered 15+ client projects ranging from marketing sites to custom e-commerce solutions. Focused on performance and accessibility.',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
]
