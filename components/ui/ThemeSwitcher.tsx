"use client";

import { useState, useEffect } from "react";
import { Palette, ChevronLeft, ChevronRight, ChevronUp, X, Check } from "lucide-react";
import { colorThemes, type ColorTheme } from "@/data/themes";

const STORAGE_KEY = "eg-interiors-theme";

export default function ThemeSwitcher() {
  const [activeId, setActiveId] = useState<string>("1");
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && colorThemes.some((t) => t.id === saved)) {
        setActiveId(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        document.documentElement.setAttribute("data-theme", "1");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "1");
    }
  }, []);

  const selectTheme = (theme: ColorTheme) => {
    setActiveId(theme.id);
    document.documentElement.setAttribute("data-theme", theme.id);
    try {
      localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {
      // ignore storage errors
    }
  };

  const currentIndex = colorThemes.findIndex((t) => t.id === activeId);
  const activeTheme = colorThemes[currentIndex >= 0 ? currentIndex : 0];

  const handleStep = (dir: -1 | 1) => {
    const nextIndex = (currentIndex + dir + colorThemes.length) % colorThemes.length;
    selectTheme(colorThemes[nextIndex]);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-4 sm:left-6 z-50 flex flex-col items-start gap-2.5 max-w-[calc(100vw-6.5rem)]">
      {/* Expanded Theme Palette Drawer */}
      {open && (
        <div
          className="w-[310px] sm:w-[370px] bg-white/95 backdrop-blur-md border border-neutral-200 shadow-2xl rounded-lg overflow-hidden text-neutral-900"
          role="dialog"
          aria-label="Color Theme Selector"
        >
          {/* Drawer Header */}
          <div className="px-4 py-3 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette size={16} className="text-amber-300" />
              <div>
                <p className="font-manrope text-xs font-bold tracking-wider uppercase">
                  Color Theme Reference (01–10)
                </p>
                <p className="font-inter text-[11px] text-neutral-300">
                  Select a numbered palette to preview
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close theme selector"
            >
              <X size={18} />
            </button>
          </div>

          {/* Theme List */}
          <div className="max-h-[58vh] overflow-y-auto p-2.5 space-y-1.5 bg-neutral-50">
            {colorThemes.map((theme) => {
              const isActive = theme.id === activeId;
              return (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-left transition-all duration-200 border ${
                    isActive
                      ? "bg-white border-neutral-900 shadow-sm ring-1 ring-neutral-900/10"
                      : "bg-white/70 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Number Badge */}
                    <span
                      className="w-7 h-7 rounded-sm flex items-center justify-center font-manrope text-xs font-bold shrink-0 transition-colors"
                      style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.onDarkAccent,
                      }}
                    >
                      {theme.number}
                    </span>

                    {/* Name & Vibe */}
                    <div className="min-w-0">
                      <p className="font-manrope text-xs font-bold text-neutral-900 truncate">
                        {theme.name}
                      </p>
                      <p className="font-inter text-[11px] text-neutral-500 truncate">
                        {theme.vibe}
                      </p>
                    </div>
                  </div>

                  {/* Swatches & Active Indicator */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center -space-x-1">
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: theme.colors.primary }}
                        title={`Primary: ${theme.colors.primary}`}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: theme.colors.surface }}
                        title={`Accent: ${theme.colors.surface}`}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: theme.colors.secondary }}
                        title={`Secondary: ${theme.colors.secondary}`}
                      />
                    </div>
                    {isActive && (
                      <Check size={15} className="text-neutral-900 shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Toggle Bar */}
      <div className="flex items-center bg-white/95 backdrop-blur-md border border-neutral-300/90 shadow-lg rounded-full p-1 text-neutral-900">
        {/* Previous Theme Button */}
        <button
          onClick={() => handleStep(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
          aria-label="Previous color theme"
          title="Previous theme"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Main Toggle Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-2.5 py-1 rounded-full hover:bg-neutral-100/80 transition-colors"
          aria-expanded={open}
          aria-label="Open color theme selector"
        >
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center font-manrope text-[11px] font-bold shrink-0 shadow-xs"
            style={{
              backgroundColor: activeTheme.colors.primary,
              color: activeTheme.colors.onDarkAccent,
            }}
          >
            {activeTheme.number}
          </span>

          <div className="hidden sm:flex flex-col items-start text-left pr-1">
            <span className="font-manrope text-[11px] font-bold text-neutral-900 leading-tight">
              {activeTheme.name}
            </span>
            <span className="font-inter text-[10px] text-neutral-500 leading-tight">
              Theme {activeTheme.number} of 10
            </span>
          </div>

          <div className="flex items-center -space-x-1 pr-0.5">
            <span
              className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
              style={{ backgroundColor: activeTheme.colors.primary }}
            />
            <span
              className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
              style={{ backgroundColor: activeTheme.colors.surface }}
            />
            <span
              className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
              style={{ backgroundColor: activeTheme.colors.secondary }}
            />
          </div>

          <ChevronUp
            size={14}
            className={`text-neutral-600 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Next Theme Button */}
        <button
          onClick={() => handleStep(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
          aria-label="Next color theme"
          title="Next theme"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

