const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#080808"/>
  <rect x="1" y="1" width="30" height="30" rx="5" fill="none" stroke="#c8f542" stroke-width="1.5"/>
  <text x="16" y="22.5" text-anchor="middle" fill="#c8f542" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700">A</text>
</svg>
`;

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, png]);
}

async function writePng(file, size) {
  const png = await sharp(Buffer.from(svg(size))).resize(size, size).png().toBuffer();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, png);
  return png;
}

async function main() {
  const app = path.join(__dirname, "..", "src", "app");
  const pub = path.join(__dirname, "..", "public");
  const png32 = await writePng(path.join(app, "icon.png"), 32);
  await writePng(path.join(app, "apple-icon.png"), 180);
  await writePng(path.join(pub, "apple-touch-icon.png"), 180);
  await writePng(path.join(pub, "icon-192.png"), 192);
  await writePng(path.join(pub, "icon-512.png"), 512);
  const ico = pngToIco(png32);
  fs.writeFileSync(path.join(app, "favicon.ico"), ico);
  fs.writeFileSync(path.join(pub, "favicon.ico"), ico);
}

main();
