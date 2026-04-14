import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(13,148,136,0.35), transparent 28%), radial-gradient(circle at top right, rgba(37,99,235,0.35), transparent 28%), linear-gradient(135deg, #08101f 0%, #0f172a 45%, #111827 100%)",
          color: "white",
          padding: "60px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 36,
            padding: 48,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#bfdbfe",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: "#2dd4bf",
              }}
            />
            Aisaiah Foundation
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 74,
                fontWeight: 700,
                lineHeight: 1.02,
                maxWidth: 820,
              }}
            >
              Digital infrastructure for faith communities.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "#cbd5e1",
                maxWidth: 880,
              }}
            >
              Executive-ready nonprofit platform positioning, event operations,
              and faith-rooted product strategy in one modern website.
            </div>
          </div>

          <div style={{ display: "flex", gap: 18 }}>
            {[
              "Mission-governed nonprofit",
              "Faith-rooted leadership",
              "Platform + app + reporting",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 20px",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: 22,
                  color: "#e2e8f0",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
