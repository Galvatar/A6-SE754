'use client'

import { useEffect, useState } from "react";

interface User {
  name: string,
  points: number
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("http://localhost:3001/leaderboard");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json() as User[];
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  }

  
  return (
    <div className="flex flex-col m-5 p-5 bg-gray-100 rounded-lg gap-3">
      <div className="flex justify-between border-b-2 border-gray-300 pb-2">
        <h1 className="font-bold text-xl">Ranking</h1>
        <h1 className="font-bold text-xl">Points</h1>
      </div>
      {users.map((user, idx) => (
        <div key={idx} className={`flex justify-between ${idx != 0 ? "border-t" : ""} border-stone-300 pt-2`}>
          <span className="flex items-center gap-2">
            <h1 className={`flex text-xl ${idx == 0 ?"bg-yellow-400" : "bg-gray-300"} w-7 rounded-full justify-center`}>
              {idx+1}
            </h1>
            <h1 className="font-semibold">{user.name}</h1>
          </span>
          <h1 className="font-semibold text-xl">{user.points}</h1>
        </div>
      ))}
    </div>
  );
}
