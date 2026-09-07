'use client';

import { createContext, useContext, useCallback, useSyncExternalStore } from 'react';

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

function subscribeToTheme(onChange) {
  window.addEventListener('themechange', onChange);
  return () => window.removeEventListener('themechange', onChange);
}

export const ThemeProvider = ({ children }) => {
  // The <html> class (set by the no-FOUC script) is the source of truth;
  // we subscribe to it as an external system rather than mirroring it in state.
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    () => !document.documentElement.classList.contains('light'),
    () => true // server snapshot: dark is the default
  );

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next = root.classList.contains('light') ? 'dark' : 'light';
    root.classList.toggle('light', next === 'light');
    root.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode — theme simply won't persist */
    }
    window.dispatchEvent(new Event('themechange'));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
