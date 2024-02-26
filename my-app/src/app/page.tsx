import CreateEmployee from "@/components/CreateEmployee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateEmployee></CreateEmployee>
    </main>
  );
}
