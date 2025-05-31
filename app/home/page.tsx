import Link from 'next/link'

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-100 to-yellow-50 overflow-hidden">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-yellow-300 opacity-50 blur-3xl -z-10"></div>

      <h1 className="text-6xl font-extrabold text-center text-gray-900 mb-6 drop-shadow-lg">
        DevLabs 2025: <br />
        <span className="text-blue-700">OpenLake Summer Edition ☀️</span>
      </h1>

      <p className="text-xl md:text-2xl text-center text-gray-700 max-w-3xl mb-8">
        Welcome to DevLabs: OpenLake Summer Edition – a comprehensive, beginner-friendly 6-week development program organized by OpenLake, IIT Bhilai.
        <br />
        Transform from a beginner to a confident developer by building{' '}
        <span className="font-semibold text-gray-900">Taskify</span>, a real-world productivity platform.
      </p>

      {/* Correct Link usage */}
      <Link href="/leaderboard" passHref className="hover:scale-[105%] inline-block text-white bg-blue-600 m-4 px-6 py-3 rounded-xl text-lg shadow-md transition-transform duration-300">
          Leaderboard
        
      </Link>

      <a
        href="https://github.com/OpenLake/DevLabs-2025"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-[105%] inline-block text-white bg-blue-600 m-4 px-6 py-3 rounded-xl text-lg shadow-md transition-transform duration-300"
          >
        View Repository on GitHub
      </a>
    </div>
  )
}
