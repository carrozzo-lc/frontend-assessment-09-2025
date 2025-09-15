'use client';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // On mount: Read the saved theme and sync the <body>
  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'light';
    setTheme(saved);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(saved);
  }, []);

  // Synchronized Toggle: Update state, body and localStorage
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      document.body.classList.remove(prev);
      document.body.classList.add(next);
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('Context must be used within a ThemeContextProvider');
  return ctx;
};

export default ThemeContextProvider;
