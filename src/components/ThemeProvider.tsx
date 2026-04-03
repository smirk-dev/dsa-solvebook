'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeSetting } from '@/lib/types';

interface ThemeContextValue {
  theme: ThemeSetting;
  resolvedTheme: 'light' | 'dim' | 'dark' | 'black';
  setTheme: (t: ThemeSetting) => void;
  themes: ThemeSetting[];
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  resolvedTheme: 'dark',
  setTheme: () => {},
  themes: ['light', 'dim', 'dark', 'black', 'system'],
});

const THEME_LABELS: Record<ThemeSetting, string> = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark',
  black: 'Black',
  system: 'System',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeSetting>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dim' | 'dark' | 'black'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeSetting | null;
    if (stored && ['light', 'dim', 'dark', 'black', 'system'].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const apply = (t: ThemeSetting) => {
      const resolved: 'light' | 'dim' | 'dark' | 'black' =
        t === 'system'
          ? mediaQuery.matches ? 'dark' : 'light'
          : (t as Exclude<ThemeSetting, 'system'>);
      
      setResolvedTheme(resolved);
      
      // Remove all theme classes
      root.classList.remove('light', 'dim', 'dark', 'black');
      // Add the resolved theme class
      if (resolved !== 'light') {
        root.classList.add(resolved);
      }
    };

    apply(theme);

    const listener = () => { if (theme === 'system') apply('system'); };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  const setTheme = (t: ThemeSetting) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, themes: ['light', 'dim', 'dark', 'black', 'system'] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const THEME_LABELS_EXPORT = THEME_LABELS;
