'use client';
import { useTheme } from '@/contexts/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-3">
      <div>Light</div>
      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 ring-1 ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out ring-inset has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
        <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
        <input
          name="setting"
          type="checkbox"
          aria-label="Use setting"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="absolute inset-0 appearance-none focus:outline-none"
        />
      </div>
      <div>Dark</div>
    </div>
  );
};

export default ThemeSwitcher;
