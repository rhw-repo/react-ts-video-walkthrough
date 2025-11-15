export interface NavLink {
  id?: string;
  label: string;
  url: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Visit Live Site",
    url: "https://frontend-production-32c1.up.railway.app/login",
    external: true,
    id:"navbar-live-app",
  },
  {
    label: "GitHub",
    url: "https://github.com/rhw-repo/mern-post-app",
    external: true,
    id:"footer-github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ruth-westnidge/",
    external: true,
    id:"footer-linkedin",
  },
];
