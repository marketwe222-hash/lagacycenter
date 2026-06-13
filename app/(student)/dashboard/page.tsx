export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome back 👋</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {["Listening", "Reading", "Writing"].map((skill) => (
          <div key={skill} className="border rounded-xl p-5">
            <p className="text-sm text-gray-500">{skill}</p>
            <p className="text-3xl font-bold mt-1">7.0</p>
            <p className="text-xs text-gray-400 mt-1">Latest band score</p>
          </div>
        ))}
      </div>
    </div>
  );
}
