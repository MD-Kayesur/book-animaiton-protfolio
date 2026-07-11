"use client";

export default function BookSpine() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2"
      style={{ width: "14px", zIndex: 60 }}
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.55) 100%)",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}
