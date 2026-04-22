import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { events } from "@/content/events";
import {
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/structured-data";
import { Calendar, MapPin, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Initiatives",
  description:
    "Upcoming events, workshops, and community gatherings from AIsaiah Foundation — helping faith communities grow through prayer, reflection, and service.",
  openGraph: {
    title: "Events & Initiatives | Aisaiah Foundation",
    description:
      "Events and gatherings that help communities grow in prayer, reflection, and service.",
  },
};

const typeLabels: Record<string, string> = {
  conference: "Conference",
  retreat: "Retreat",
  workshop: "Workshop",
  community: "Community Event",
};

export default function EventsPage() {
  const pageSchema = getWebPageSchema({
    title: "Events & Initiatives",
    description: metadata.description as string,
    path: "/events",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
  ]);

  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <JsonLd data={[pageSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Join the movement"
        title="Connect, learn, and grow with us."
        description="Join our workshops, roundtables, and community events. Use AIsaiah to deepen prayer, reflection, and service during and after your event."
      />

      {upcoming.length > 0 && (
        <Section>
          <SectionHeader>
            <SectionTitle>Upcoming Events</SectionTitle>
            <SectionDescription>
              Events and initiatives you can participate in
            </SectionDescription>
          </SectionHeader>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <Card key={event.id} hover className="h-full">
                <CardContent className="flex h-full flex-col p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                      Upcoming
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Tag className="h-3 w-3" />
                      {typeLabels[event.type] || event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-3 flex-1 text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {past.length > 0 && (
        <Section variant="muted">
          <SectionHeader>
            <SectionTitle>Past Events</SectionTitle>
          </SectionHeader>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {past.map((event) => (
              <Card key={event.id} className="h-full opacity-75">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section variant={past.length > 0 ? "default" : "muted"}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Want to host an event with us?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Want to host an event that helps your community grow in faith?
            We&apos;d love to help you plan it.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
