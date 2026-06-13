const RESULTS = [
  { skill: "Listening", score: 32, max: 40, date: "2025-06-01" },
  { skill: "Reading",   score: 28, max: 40, date: "2025-06-03" },
  { skill: "Writing",   score: 14, max: 20, date: "2025-06-05" },
];

export default function ProgressPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Progress</h1>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-400">
            <th className="py-2 pr-4">Skill</th>
            <th className="py-2 pr-4">Score</th>
            <th className="py-2 pr-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {RESULTS.map((r) => (
            <tr key={r.skill + r.date} className="border-b">
              <td className="py-2 pr-4">{r.skill}</td>
              <td className="py-2 pr-4">{r.score}/{r.max}</td>
              <td className="py-2 pr-4">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
