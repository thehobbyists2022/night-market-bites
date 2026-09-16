import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="inline-block rounded-full bg-night-lantern/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-night-lantern">
        Night Market Bites
      </span>
      <h1 className="text-3xl font-black tracking-tight text-night-ink sm:text-4xl">
        Asia Street Food Guide
      </h1>
      <p className="max-w-md text-sm text-night-muted">
        Scaffold ready. Seven night-market districts (Taiwan, Thailand, Japan, Korea,
        Malaysia, Philippines, Vietnam) will appear here as content is migrated.
      </p>
      <div className="mt-2 flex gap-3 text-2xl">
        <span>🍡</span>
        <span>🍜</span>
        <span>🍢</span>
        <span>🧋</span>
        <span>🥟</span>
      </div>
    </div>
  );
};

export default App;
