import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, Product and Brand Designer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/images/hero/light-1.png"), "base64");
  const portraitSrc = `data:image/png;base64,${portrait}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 44,
          overflow: "hidden",
          background: "#f2f1ee",
          color: "#17171a",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -190,
            left: -150,
            display: "flex",
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "radial-gradient(circle, rgba(94,23,235,0.25) 0%, rgba(94,23,235,0) 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            border: "1px solid rgba(23,23,26,0.12)",
            borderRadius: 34,
            background: "rgba(255,255,255,0.64)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 690,
              padding: "52px 52px 48px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", fontSize: 20, fontWeight: 600, letterSpacing: -0.2 }}>
              {site.name}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 62, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3.2 }}>
                I design products and brands people actually enjoy using.
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: 36, color: "#626268", fontSize: 22 }}>
                <span>{site.title}</span>
                <span style={{ margin: "0 13px", color: "#aaa9ad" }}>·</span>
                <span>{site.location}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", color: "#6b6b6f", fontSize: 17 }}>
              <span style={{ display: "flex", width: 10, height: 10, marginRight: 10, borderRadius: 10, background: "#5e17eb" }} />
              Product and brand portfolio
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              flex: 1,
              margin: 14,
              overflow: "hidden",
              borderRadius: 25,
              backgroundImage: `url(${portraitSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 18,
                bottom: 18,
                display: "flex",
                padding: "9px 14px",
                borderRadius: 999,
                background: "rgba(17,17,19,0.82)",
                color: "#f2f1ee",
                fontSize: 15,
              }}
            >
              ladapoferanmi.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
