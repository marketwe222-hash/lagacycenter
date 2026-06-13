import { Button } from "@heroui/react";

export default function CtaBanner() {
  return (
    <section className="bg-legacy-gradient text-white">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Commencez votre parcours pour étudier, travailler ou vivre à
          l&apos;étranger en toute confiance.
        </h2>
        <div className="mt-6">
          <Button
            as="a"
            href="/register"
            className="bg-accent text-accent-foreground font-semibold hover:bg-accent/90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
