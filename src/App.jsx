import Header from './components/Header';
import ServerStatus from './components/ServerStatus';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight mb-3">Live Server Response</h2>
          <p className="text-slate-300 mb-4">This checks a local Go server at http://localhost:8000 and shows the response.</p>
          <ServerStatus />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight mb-3">Run the Go "Hello World" Server</h2>
          <p className="text-slate-300 mb-4">Use the following commands in the project root:</p>
          <CodeBlock lines={[
            '$ go run main.go',
            '# In another terminal/tab:',
            '$ curl http://localhost:8000',
          ]} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
