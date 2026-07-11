"use client";

/** Decorative stitched binding along the hardcover spine edges. */
export default function BookBinding({ side }: { side: "left" | "right" }) {
  const dots = Array.from({ length: 9 });
  return (
    <div
      className={`pointer-events-none absolute top-0 h-full w-[3px] ${
        side === "left" ? "left-1.5" : "right-1.5"
      }`}
      style={{ zIndex: 65 }}
    >
      <div className="flex h-full flex-col items-center justify-evenly opacity-40">
        {dots.map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-gold-light"
            style={{ boxShadow: "0 0 3px rgba(0,0,0,0.5)" }}
          />
        ))}
      </div>
    </div>
  );
}
