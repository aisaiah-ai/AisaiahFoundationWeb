import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Partnership",
  description:
    "Get in touch with AIsaiah Foundation. Partner with us, ask questions, or support our mission to help people grow in faith through prayer, reflection, and service.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
