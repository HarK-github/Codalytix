'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Extract top-level directory from current route
  const basePath = pathname.split('/')[1] || '';

  // Construct correct routes
  const homePath = `/${basePath}/`;
  const leaderboardPath = `/${basePath}/leaderboard`;

  return (
    <html lang="en">
      <body className="bg-blue-950 text-white min-h-screen flex flex-col">
        <div
          id="topbar"
          className="flex justify-between fixed z-1 px-6 py-4 bg-blue-900 w-full shadow-md"
        >
          <h1 className="text-xl font-bold">Contributor App</h1>
          <div className="flex gap-4">
            <Link
              href={homePath}
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-full transition"
            >
              Home
            </Link>
            <Link
              href={leaderboardPath}
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-full transition"
            >
              Leaderboard
            </Link>
          </div>
        </div>

        <main className="flex-grow bg-blue-950 px-6 py-4 mt-20">
          {children}
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Made with ❤️ by Harshit Kandpal</p>
        </footer>
      </body>
    </html>
  );
}
