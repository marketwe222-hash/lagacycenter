const COURSES = [
  { id: "1", title: "IELTS Listening Mastery", skill: "Listening", enrolled: 41 },
  { id: "2", title: "Academic Reading Skills",  skill: "Reading",   enrolled: 38 },
  { id: "3", title: "Writing Task 1 & 2",       skill: "Writing",   enrolled: 45 },
];

export default function AdminCoursesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
          + New course
        </button>
      </div>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left text-gray-400">
            <th className="py-2 pr-4">Title</th>
            <th className="py-2 pr-4">Skill</th>
            <th className="py-2">Enrolled</th>
          </tr>
        </thead>
        <tbody>
          {COURSES.map((c) => (
            <tr key={c.id} className="border-b">
              <td className="py-2 pr-4">{c.title}</td>
              <td className="py-2 pr-4">{c.skill}</td>
              <td className="py-2">{c.enrolled}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
