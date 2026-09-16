import { ImageResponse } from "next/og";

export const alt = "AasanIt — digital product engineering studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#f4f1ea",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <span>AASANIT</span>
          <span style={{ color: "#c8f542" }}>STUDIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 0.95, letterSpacing: -3 }}>
          <span>Digital products.</span>
          <span>Intelligence built in.</span>
        </div>
      </div>
    ),
    size,
  );
}
