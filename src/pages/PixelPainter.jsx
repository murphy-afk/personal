import { useState } from "react";

export default function PixelPainter() {
  const GRID_SIZE = 12;

  const COLORS = [
    "#7a41f6", // purple
    "#4A7A4C", // green
    "#f76198", // pink
    "#f6cf41", // yellow
    "#F4A261", // peach
    "#E76F51", // coral
    "#000000", // black
    "#EEEAF7", // white
  ];

  const [pixels, setPixels] = useState(
    Array(GRID_SIZE * GRID_SIZE).fill("#EEEAF7")
  );

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  function paintPixel(index) {
    setPixels((prev) => {
      const copy = [...prev];
      copy[index] = selectedColor;
      return copy;
    });
  }

  function clearCanvas() {
    setPixels(Array(GRID_SIZE * GRID_SIZE).fill("#EEEAF7"));
  }

  return (
    <div className="space-y-6 my-5">
      <section
        className="
          max-w-md mx-auto p-6
          bg-white/40 backdrop-blur-md
          border-4 border-green-900
          shadow-[0_4px_0_rgba(0,0,0,0.4)]
          bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[6px_6px]">
        <h1 className="text-2xl font-bold text-green-950 mb-4 relative inline-block uppercase tracking-wide">
          Pixel Painter
          <span className="absolute left-0 -bottom-2 w-full h-3 
            bg-green-700/60 border-2 border-green-900 
            shadow-[0_2px_0_rgba(0,0,0,0.4)]"></span>
        </h1>

        <p className="text-green-900/80 mb-4">
          Click a tile to paint and create tiny pixel art!
        </p>

        <div
          className="mx-auto border-4 border-green-900 shadow-[0_4px_0_rgba(0,0,0,0.4)]"
          style={{
            width: "300px",
            height: "300px",
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
          }}
        >
          {pixels.map((color, index) => (
            <button
              key={index}
              onClick={() => paintPixel(index)}
              className="border border-green-900/40"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`
                w-8 h-8 border-4 border-green-900 shadow-[0_3px_0_rgba(0,0,0,0.4)]
                ${selectedColor === color ? "scale-110" : ""}
              `}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={clearCanvas}
            className="
              px-4 py-2 font-bold uppercase tracking-wide
              bg-green-700/70 text-green-950 border-4 border-green-900
              shadow-[0_4px_0_rgba(0,0,0,0.4)]
              hover:translate-y-1 hover:shadow-[0_2px_0_rgba(0,0,0,0.4)]
              transition-all">
            Clear
          </button>
        </div>
      </section>
    </div>
  );
}
