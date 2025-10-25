export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-400 flex items-center justify-between">
        <span>Built with React, Tailwind CSS, and Go</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
