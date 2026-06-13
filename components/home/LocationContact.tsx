export default function LocationContact() {
  return (
    <section className="mx-auto max-w-(--breakpoint-xl) px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 text-foreground/80 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <p className="flex items-center gap-2">
          <span className="text-primary">📍</span> Chapelle Obili, Yaoundé
        </p>
        <p className="flex items-center gap-2">
          <span className="text-primary">📞</span> +237 671 619 643, 680 148 076
        </p>
      </div>
    </section>
  );
}
