export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm text-gray-400 mb-2">Lesson {params.id}</p>
      <h1 className="text-2xl font-bold mb-4">Understanding Lecture Styles</h1>
      <p className="text-gray-600 leading-relaxed">
        In this lesson you will practise identifying the speaker's main argument,
        supporting details, and signpost language used in academic lectures.
      </p>
    </div>
  );
}
