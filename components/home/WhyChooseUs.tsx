const REASONS = [
  "Formateurs expérimentés",
  "Cours en ligne et en présentiel",
  "Apprentissage interactif centré sur l'étudiant",
  "Exercices et stratégies d'examen réels",
  "Horaires flexibles et tarifs abordables",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-content2">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-foreground">Pourquoi nous choisir ?</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-foreground/80">
              <span className="mt-0.5 text-primary">✓</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
