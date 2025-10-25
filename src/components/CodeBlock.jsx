export default function CodeBlock({ lines = [] }) {
  return (
    <pre className="overflow-auto rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-sm leading-relaxed text-slate-200">
      <code>
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </code>
    </pre>
  );
}
