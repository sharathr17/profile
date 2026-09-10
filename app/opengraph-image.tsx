import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.role}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d10",
          color: "#ece8df",
          padding: "72px 84px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#5b9cf0",
            }}
          />
          <span style={{ fontSize: 26, color: "#5b9cf0" }}>
            Sharath R — Web Developer
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 920,
          }}
        >
          <span
            style={{
              fontSize: 72,
              lineHeight: 1.08,
              letterSpacing: "-1px",
              fontWeight: 700,
              color: "#ece8df",
            }}
          >
            Building useful digital experiences with code.
          </span>
          <span style={{ fontSize: 28, color: "#a2abb5", lineHeight: 1.5 }}>
            MCA student with a BCA background — Python, React, CSS, SQL.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #212830",
            paddingTop: 24,
            fontSize: 20,
            color: "#6e7884",
          }}
        >
          <span>Bangalore / Kundapur, India</span>
          <span style={{ color: "#5b9cf0" }}>sharathrmaravanthe.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}