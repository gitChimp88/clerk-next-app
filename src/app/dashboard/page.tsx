import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Dashboard() {
  const user = await currentUser();
  return (
    <main style={{ padding: 24 }}>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <UserButton /> <h1>Dashboard</h1>
      </header>
      <p>Welcome{user?.firstName ? `, ${user.firstName}` : ""}!</p>
    </main>
  );
}
