export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total students", value: "124" },
          { label: "Active courses",  value: "6" },
          { label: "Tests taken",     value: "538" },
          { label: "Avg band score",  value: "6.5" },
        ].map(({ label, value }) => (
          <div key={label} className="border rounded-xl p-5">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
