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

      <div className="text-lg text-gray-800 max-w-3xl mb-8 space-y-3">
        <p><span className="font-bold">🗓 Bootcamp Info</span><br />
        <strong>Duration:</strong> 10th June – 10th July<br />
        <strong>Mode:</strong> Hybrid (Online + Optional Meetups)<br />
        <strong>Eligibility:</strong> Open to all IIT Bhilai students<br />
        <strong>Club:</strong> Blockchain at IIT Bhilai (BIB)
        </p>

        <p><span className="font-bold">🛠 Projects You'll Build</span><br />
        <strong>🧱 Project 1:</strong> Build Your Own Blockchain<br />
        <strong>🌐 Project 2:</strong> Make Blockchain Interactive<br />
        <strong>₿ Project 3:</strong> Bitcoin Node Transactions
        </p>

        <p><span className="font-bold">🎤 Meet the Industry Experts</span><br />
        Exclusive sessions with Web3 founders, blockchain engineers, and IIT alumni in crypto.
        </p>

        <p><span className="font-bold">🎓 What You'll Learn</span><br />
        Blockchain internals, peer-to-peer architecture, dApps, Bitcoin RPCs, scripting, and more.
        </p>
      </div>

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
