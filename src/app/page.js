import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Link href="/login" className="bg-blue-500 px-2 py-1 rounded">Login here</Link>
    </div>
  );
}
