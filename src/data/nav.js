// Single source of truth for site sections. Adding a new tab is:
//   1. add a page component under src/pages/
//   2. add its route entry in router.jsx
//   3. add an entry here — the sidebar picks it up automatically
export const navItems = [
  { path: '/', label: 'home', end: true },
  { path: '/work', label: 'work', end: false },
];
