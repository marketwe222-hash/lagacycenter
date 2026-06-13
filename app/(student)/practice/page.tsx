export default function PracticePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Practice</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { skill: "Listening", desc: "Audio-based gap fill & MCQ" },
          { skill: "Reading",   desc: "Academic passage + questions" },
          { skill: "Writing",   desc: "Task 1 graph & Task 2 essay" },
        ].map(({ skill, desc }) => (
          <div key={skill} className="border rounded-xl p-5">
            <h2 className="font-semibold mb-1">{skill}</h2>
            <p className="text-sm text-gray-500 mb-4">{desc}</p>
            <button className="text-sm text-blue-600 font-medium">Start →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
