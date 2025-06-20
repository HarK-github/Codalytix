'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRR9cRWa07Waf-VPy1-K129KsNQyvx9riDs8hGc6IvWBk90g7Koib-Gu94Coq7nQgxyefMl4vAeaVSc/pub?output=csv';

export default function SpreadsheetTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const cleaned = parsed.data.filter(p => p.Name && p.Points);
        setData(cleaned);
      })
      .catch((err) => console.error('Failed to fetch spreadsheet:', err));
  }, []);

  if (!data.length) return <p className="text-center py-10 text-xl">Loading...</p>;

  const sortedData = [...data].sort(
    (a, b) => Number(b.Points) - Number(a.Points)
  );

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
            name={user.Name}
            avatar={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.Name)}&background=random`}
            points={Number(user.Points)}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ rank, name, avatar, points }) {
  return (
    <div className="flex items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-default">
      <div className="text-2xl font-bold text-gray-700 w-10 text-center select-none">
        {rank}
      </div>

      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full mx-4 border-2 border-gray-300"
      />

      <div className="flex flex-col flex-grow">
        <span className="text-lg font-semibold text-gray-900">{name}</span>
        <span className="text-sm text-gray-600">Participant</span>
      </div>

      <div className="text-xl font-bold text-blue-600 min-w-[70px] text-right select-none">
        {points} pts
      </div>
    </div>
  );
}
