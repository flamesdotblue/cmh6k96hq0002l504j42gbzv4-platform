import { useCallback, useEffect, useState } from 'react';
import { Server, RefreshCw, Check, XCircle } from 'lucide-react';

export default function ServerStatus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState('');

  const checkServer = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData('');
    try {
      const res = await fetch('http://localhost:8000/', { method: 'GET' });
      const text = await res.text();
      setData(text);
    } catch (e) {
      setError(e?.message || 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      checkServer();
    }, 400);
    return () => clearTimeout(t);
  }, [checkServer]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <Server className="text-emerald-400" size={18} />
        </div>
        <div className="text-sm text-slate-300">
          Target URL: <code className="text-slate-200">http://localhost:8000/</code>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        {loading && (
          <div className="flex items-center gap-2 text-slate-300">
            <RefreshCw className="animate-spin" size={16} /> Checking server...
          </div>
        )}
        {!loading && error && (
          <div className="flex items-center gap-2 text-rose-300">
            <XCircle size={16} /> {error}
          </div>
        )}
        {!loading && !error && data && (
          <div className="flex items-center gap-2 text-emerald-300">
            <Check size={16} /> Response: <span className="font-medium text-emerald-200">{data}</span>
          </div>
        )}
        {!loading && !error && !data && (
          <div className="text-slate-400">No data yet.</div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={checkServer}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
        >
          <RefreshCw size={16} /> Retry
        </button>
        <span className="text-xs text-slate-400">Ensure the Go server is running on port 8000.</span>
      </div>
    </div>
  );
}
