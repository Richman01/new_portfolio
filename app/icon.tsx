import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const portrait = await readFile(join(process.cwd(), "public/images/hero/light-2.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          border: "2px solid #f2f1ee",
          borderRadius: 18,
          backgroundImage: `url(data:image/png;base64,${portrait})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    ),
    size
  );
}
