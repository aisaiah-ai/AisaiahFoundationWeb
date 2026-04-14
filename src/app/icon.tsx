import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f766e 0%, #2563eb 100%)",
          borderRadius: 16,
          color: "white",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
        }}
      >
        A
      </div>
    ),
    size
  );
}
