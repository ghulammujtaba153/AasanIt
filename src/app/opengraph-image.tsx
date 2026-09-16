import { ImageResponse } from "next/og";

export const alt = "AasanIt — digital solutions studio";
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #c8f542",
                color: "#c8f542",
                fontSize: 36,
                fontWeight: 700,
              }}
            >
              A
            </div>
            <span style={{ fontSize: 28, letterSpacing: 6 }}>AASANIT</span>
          </div>
          <span style={{ color: "#c8f542", fontSize: 22, letterSpacing: 4 }}>STUDIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 0.95, letterSpacing: -3 }}>
          <span>Digital solutions.</span>
          <span>Built to last.</span>
        </div>
      </div>
    ),
    size,
  );
}
