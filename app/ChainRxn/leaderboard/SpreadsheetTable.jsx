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
        const cleaned = parsed.data.filter(
          (p) =>
            p.Name &&
            p['Essential Implementation'] &&
            p['Innovative Add-ons'] &&
            p['Total Score']
        );
        setData(cleaned);
      })
      .catch((err) => console.error('Failed to fetch spreadsheet:', err));
  }, []);

  if (!data.length)
    return <p className="text-center py-10 text-xl">Loading...</p>;

  const sortedData = [...data].sort(
    (a, b) => Number(b['Total Score']) - Number(a['Total Score'])
  );

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-12 bg-gradient-to-br from-blue-100 to-yellow-50 w-full overflow-x-hidden">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-gray-900 drop-shadow-lg">
        Leaderboard
      </h1>

      <div className="grid gap-4 sm:gap-6 w-full max-w-4xl">
        {sortedData.map((user, index) => (
          <Card
            key={index}
            rank={index + 1}
            name={user.Name}
            avatar={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.Name
            )}&background=random`}
            essential={Number(user['Essential Implementation'])}
            innovative={Number(user['Innovative Add-ons'])}
            total={Number(user['Total Score'])}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ rank, name, avatar, essential, innovative, total }) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-default w-full">
      {/* Rank */}
      <div className="text-xl sm:text-2xl font-bold text-gray-700 w-full sm:w-10 text-center sm:text-left mb-2 sm:mb-0">
      
      </div>

      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full border-2 border-gray-300 mx-auto sm:mx-4 mb-2 sm:mb-0"
      />

      {/* Name + Breakdown */}
      <div className="flex flex-col flex-grow items-center sm:items-start text-center sm:text-left">
        <span className="text-base sm:text-lg font-semibold text-gray-900">
          {name}
        </span>
        <span className="text-sm text-gray-600">
          Essential: {essential} | Innovative: {innovative}
        </span>
      </div>

      {/* Total Points */}
      <div className="text-lg sm:text-xl font-bold text-blue-600 min-w-[80px] text-center sm:text-right mt-2 sm:mt-0">
        {total} pts
      </div>
    </div>
  );
}
