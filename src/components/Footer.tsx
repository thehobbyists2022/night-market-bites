import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-200/80 bg-white px-4 py-8 text-center text-xs text-stone-500">
      <div className="mx-auto max-w-2xl space-y-2">
        <p className="font-bold text-stone-700">
          Night Market Bites · 亞洲夜市正宗街頭美食指南
        </p>
        <p className="text-[11px] leading-relaxed text-stone-400">
          🛒 <span className="font-semibold text-stone-600">Amazon Associates Disclosure:</span> As an Amazon Associate, Night Market Bites earns from qualifying purchases at no extra cost to you. Physical ingredients & cookware are sourced via Amazon Prime.
        </p>
        <p className="text-[10px] text-stone-400 pt-2 border-t border-stone-100">
          © 2026 Night Market Bites. Built for iOS & iPadOS. All authentic recipe instructions, culture stories, and speech synthesis are designed for home cooks and world travelers.
        </p>
      </div>
    </footer>
  );
};
