const RESULTS = [
  { student: "Alice Ngo",   skill: "Listening", score: "36/40", date: "2025-06-10" },
  { student: "Brian Eto",   skill: "Reading",   score: "28/40", date: "2025-06-09" },
  { student: "Claire Meka", skill: "Writing",   score: "16/20", date: "2025-06-08" },
];

export default function ResultsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Results</h1>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-400">
            <th className="py-2 pr-4">Student</th>
            <th className="py-2 pr-4">Skill</th>
            <th className="py-2 pr-4">Score</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {RESULTS.map((r) => (
            <tr key={r.student + r.date} className="border-b">
              <td className="py-2 pr-4">{r.student}</td>
              <td className="py-2 pr-4">{r.skill}</td>
              <td className="py-2 pr-4">{r.score}</td>
              <td className="py-2">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
