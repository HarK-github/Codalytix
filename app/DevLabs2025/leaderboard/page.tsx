import fetchall from '@/data/fetchdata';

export default async function Leaderboard() {
  const datas = await fetchall();

  // Sort by points descending
  const sortedData = [...datas].sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 bg-gradient-to-br from-blue-100 to-yellow-50 overflow-auto">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900 drop-shadow-lg">
        Leaderboard
      </h1>
       
      <div className="grid gap-6 w-full max-w-4xl">
        {sortedData.map((user, index) => (
          <Card
            key={index}
            rank={index + 1}
            name={user.user}
            github={user.user}
            avatar={user.avatar}
            pullRequests={user.prCount}
            points={user.points}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  rank,
  name,
  github,
  avatar,
  pullRequests,
  points
}: {
  rank: number;
  name: string;
  github: string;
  avatar: string;
  pullRequests: number;
  points: number;
}) {
  return (
    <a
      href={`https://github.com/${github}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer no-underline"
    >
      {/* Rank number */}
      <div className="text-2xl font-bold text-gray-700 w-10 text-center select-none">
        {rank}
      </div>

      {/* GitHub profile picture */}
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full mx-4 border-2 border-gray-300"
      />

      {/* Name and pull requests */}
      <div className="flex flex-col flex-grow">
        <span className="text-lg font-semibold text-gray-900">{name}</span>
        <span className="text-sm text-gray-600">Pull Requests: {pullRequests}</span>
      </div>

      {/* Points */}
      <div className="text-xl font-bold text-blue-600 min-w-[70px] text-right select-none">
        {points} pts
      </div>
    </a>
  );
}
