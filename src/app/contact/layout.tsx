import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Partnership",
  description:
    "Get in touch with the Aisaiah Foundation. Explore partnership opportunities, ask questions about our platform, or support our mission to empower faith communities through technology.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
