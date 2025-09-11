// components
import TodoList from '@/components/TodoList';
import Card from '@/components/Card';
import RegistrationForm from '@/components/RegistrationForm';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <div className="px-6 py-6">
      <h1 className="text-center text-2xl font-bold">
        Frontend Developer React Assesment 2025
      </h1>

      <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card title="TodoList Test">
          <TodoList />
        </Card>

        <Card title="Context Test (Light / Dark theme) Test">Component</Card>

        <Card title="RegistrationForm Test">
          <RegistrationForm />
        </Card>
      </main>
    </div>
  );
}
