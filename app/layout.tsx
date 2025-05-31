import './globals.css';
import Link from 'next/link';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-950 text-white min-h-screen flex flex-col">
 
        <div
          id="topbar"
          className="flex justify-between fixed z-1 px-6 py-4 bg-blue-900 w-[100%] shadow-md"
        >
          <h1 className="text-xl font-bold">Contributor App</h1>
          <div className="flex gap-4">
            <Link href="/home" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-full transition">
              Home
            </Link>
            <Link href="/leaderboard" className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-full transition">
              Leaderboard
            </Link>
          </div>
        </div>
 
        <main className="flex-grow bg-blue-950 px-6 py-4 m-4">{children}</main>
 
        <footer className="bg-gray-800 text-white text-center py-4 fixed">
          <p>© 2025 Made with ❤️ by Harshit Kandpal</p>
        </footer>
      </body>
    </html>
  );
}
