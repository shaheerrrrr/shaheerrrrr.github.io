// Unified projects + experience feed for the Work page. `category` drives the
// filter tabs; `year` is optional (omit rather than guess) and renders
// right-aligned next to the title when present. Sorted by year, newest
// first; within a year, newest addition goes on top unless told otherwise.
export const workItems = [
  {
    id: 'next-robotics',
    title: 'NEXT Robotics',
    description:
      'A robotics curriculum built and piloted for military training use at the United States Naval Academy.',
    category: 'project',
    year: 2026,
    href: 'https://github.com/shaheerrrrr/next2026',
  },
  {
    id: 'vandy-rmp-integration',
    title: 'Vandy RateMyProfessor Integration',
    description:
      "Browser extension injecting RateMyProfessor ratings into Vanderbilt's course registration page. Reverse-engineered an undocumented API — now used by 100+ students.",
    category: 'project',
    year: 2026,
    href: 'https://github.com/shaheerrrrr/vandy-rmp-integration',
  },
  {
    id: 'rl-robotics-manipulation',
    title: 'RL Robotics Manipulation',
    description:
      'Trained PPO policies for robotic manipulation in MuJoCo/Meta-World. Hit 92% success on reach-v3 within 1M steps on a laptop GPU.',
    category: 'project',
    year: 2026,
    href: null,
  },
  {
    id: 'gpt2-mechanistic-interpretability',
    title: 'Mechanistic Interpretability of GPT-2 Small',
    description:
      'Reverse-engineered the attention circuit behind subject-verb agreement using activation and path patching across 144 heads.',
    category: 'project',
    year: 2026,
    href: null,
  },
  {
    id: 'jhu-software-engineering-intern',
    title: 'Johns Hopkins University',
    description: 'Software Engineering Intern building an AI-powered educational game in Unity.',
    category: 'experience',
    year: 2025,
    href: null,
  },
];
