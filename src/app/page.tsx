// components
import TodoList from '@/components/TodoList';
import Card from '@/components/ui/Card';
import RegistrationForm from '@/components/RegistrationForm';
import ThemeSwitcher from '@/components/ThemeSwitcher';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <div className="px-6 py-6 dark:bg-black">
      <h1 className="text-center text-2xl font-bold dark:text-white">
        Frontend Developer React Assessment 2025
      </h1>

      <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card title="TodoList Test">
          <TodoList />
        </Card>

        <Card title="Context (Light / Dark theme) Test">
          <ThemeSwitcher />
        </Card>

        <Card title="RegistrationForm Test">
          <RegistrationForm />
        </Card>
      </main>
    </div>
  );
}
