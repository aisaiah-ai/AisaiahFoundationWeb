import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Board", href: "/board" },
  { label: "Solutions", href: "/solutions" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Board of Directors", href: "/board" },
    { label: "Our Team", href: "/team" },
    { label: "Our Mission", href: "/about#mission" },
  ],
  solutions: [
    { label: "Platform Overview", href: "/solutions" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Event Management", href: "/solutions#events" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Partnership Inquiry", href: "/contact#partnership" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Download App", href: "/solutions#download" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
