const COURSES = [
  { id: "1", title: "IELTS Listening Mastery", skill: "Listening", lessons: 12 },
  { id: "2", title: "Academic Reading Skills",  skill: "Reading",   lessons: 10 },
  { id: "3", title: "Writing Task 1 & 2",       skill: "Writing",   lessons: 14 },
];

export default function CoursesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {COURSES.map((c) => (
          <div key={c.id} className="border rounded-xl p-6">
            <span className="text-xs font-medium uppercase tracking-wide text-blue-600">{c.skill}</span>
            <h2 className="font-semibold mt-1 mb-2">{c.title}</h2>
            <p className="text-sm text-gray-500">{c.lessons} lessons</p>
          </div>
        ))}
      </div>
    </div>
  );
}
