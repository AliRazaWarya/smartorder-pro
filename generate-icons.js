const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function createPng(size, bgColor, fgColor) {
  const width = size;
  const height = size;
  const rawData = Buffer.alloc(height * (width * 4 + 1));
  
  const [bgR, bgG, bgB] = bgColor;
  const [fgR, fgG, fgB] = fgColor;

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      // Rounded corner icon box + receipt symbol shape
      const cx = width / 2;
      const cy = height / 2;
      const cornerRadius = size * 0.22;
      const rx = Math.abs(x - cx);
      const ry = Math.abs(y - cy);
      const half = size * 0.46;

      let isInsideIcon = true;
      if (rx > half || ry > half) {
        isInsideIcon = false;
      } else if (rx > half - cornerRadius && ry > half - cornerRadius) {
        const dx = rx - (half - cornerRadius);
        const dy = ry - (half - cornerRadius);
        if (dx * dx + dy * dy > cornerRadius * cornerRadius) {
          isInsideIcon = false;
        }
      }

      // Draw receipt paper inside
      const rw = size * 0.48;
      const rh = size * 0.62;
      const rx2 = Math.abs(x - cx);
      const ry2 = Math.abs(y - cy);
      const isReceipt = (rx2 <= rw / 2 && ry2 <= rh / 2);

      // Lines on receipt
      const isLine1 = (isReceipt && y > cy - rh*0.3 && y < cy - rh*0.22 && rx2 < rw*0.35);
      const isLine2 = (isReceipt && y > cy - rh*0.12 && y < cy - rh*0.04 && rx2 < rw*0.35);
      const isLine3 = (isReceipt && y > cy + rh*0.06 && y < cy + rh*0.14 && rx2 < rw*0.35);
      const isTotal = (isReceipt && y > cy + rh*0.24 && y < cy + rh*0.34 && rx2 < rw*0.35);

      if (!isInsideIcon) {
        rawData[offset++] = 0;
        rawData[offset++] = 0;
        rawData[offset++] = 0;
        rawData[offset++] = 0; // transparent
      } else if (isLine1 || isLine2 || isLine3) {
        rawData[offset++] = 16;
        rawData[offset++] = 185;
        rawData[offset++] = 129; // emerald-500
        rawData[offset++] = 255;
      } else if (isTotal) {
        rawData[offset++] = 245;
        rawData[offset++] = 158;
        rawData[offset++] = 11; // amber-500
        rawData[offset++] = 255;
      } else if (isReceipt) {
        rawData[offset++] = 255;
        rawData[offset++] = 255;
        rawData[offset++] = 255;
        rawData[offset++] = 255;
      } else {
        rawData[offset++] = bgR;
        rawData[offset++] = bgG;
        rawData[offset++] = bgB;
        rawData[offset++] = 255;
      }
    }
  }

  const deflated = zlib.deflateSync(rawData);

  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }
  const table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const full = Buffer.concat([typeBuf, data]);
    crcBuf.writeUInt32BE(crc32(full), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type (RGBA)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const png = Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflated),
    chunk('IEND', Buffer.alloc(0))
  ]);

  return png;
}

const dir = path.join(__dirname, 'icons');
fs.writeFileSync(path.join(dir, 'icon-192.png'), createPng(192, [4, 120, 87], [255, 255, 255]));
fs.writeFileSync(path.join(dir, 'icon-512.png'), createPng(512, [4, 120, 87], [255, 255, 255]));
console.log('Icons generated successfully!');
