'use client';

export default function PrintButton() {
  return (
    <button
      className="px-4 py-2 rounded bg-cyan-400 text-slate-950 font-semibold"
      onClick={() => window.print()}
    >
      Print Certificate
    </button>
  );
}
