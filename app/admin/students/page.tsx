const STUDENTS = [
  { id: "1", name: "Alice Ngo",    email: "alice@example.com",  band: 7.0 },
  { id: "2", name: "Brian Eto",    email: "brian@example.com",  band: 6.5 },
  { id: "3", name: "Claire Meka",  email: "claire@example.com", band: 7.5 },
];

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Students</h1>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-400">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Email</th>
            <th className="py-2">Band</th>
          </tr>
        </thead>
        <tbody>
          {STUDENTS.map((s) => (
            <tr key={s.id} className="border-b">
              <td className="py-2 pr-4">{s.name}</td>
              <td className="py-2 pr-4">{s.email}</td>
              <td className="py-2">{s.band}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
