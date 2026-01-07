
import prisma from "../lib/prisma";
import AddUserButton from "./AddUserButton";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Show Users
        </h1>
        <AddUserButton />
        <div className="flex flex-col items-center justify-center gap-4">
          {users.map((user) => (
            <div key={user.id} className="text-zinc-900 dark:text-zinc-100">
              {user.name} - {user.email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
