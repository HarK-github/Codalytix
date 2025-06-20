import Link from 'next/link'

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-100 to-yellow-50 overflow-hidden">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-yellow-300 opacity-50 blur-3xl -z-10"></div>

      <h1 className="text-6xl font-extrabold text-center text-gray-900 mb-6 drop-shadow-lg">
        ChainRxn 2025: <br />
        <span className="text-purple-700">The Blockchain Summer Bootcamp 🧱</span>
      </h1>

      <p className="text-xl md:text-2xl text-center text-gray-700 max-w-3xl mb-8">
        Welcome to ChainRxn – a summer-long journey into the world of decentralized tech, organized by <span className="font-semibold text-gray-900">BIB – Blockchain at IIT Bhilai</span>.
        <br />
        From building your own blockchain to interacting with real Bitcoin nodes – ChainRxn is your Web3 jumpstart.
      </p>
 

      {/* Navigation Button */}
      <Link
        href="/ChainRxn/leaderboard"
        passHref
        className="hover:scale-[105%] inline-block text-white bg-purple-700 m-4 px-6 py-3 rounded-xl text-lg shadow-md transition-transform duration-300"
      >
        Leaderboard
      </Link>

      {/* GitHub Repository */}
      <a
        href="https://github.com/OpenLake/DevLabs-2025" // Replace with actual ChainRxn repo link if different
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-[105%] inline-block text-white bg-purple-700 m-4 px-6 py-3 rounded-xl text-lg shadow-md transition-transform duration-300"
      >
        View Repository on GitHub
      </a>
    </div>
  )
}
