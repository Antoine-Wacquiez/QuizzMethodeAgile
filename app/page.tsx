import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-card py-section">
      <div className="flex w-full max-w-lg flex-col items-center gap-card text-center">
        <p className="text-label font-medium uppercase tracking-wide text-primary-600">
          Quiz interactif
        </p>
        <h1 className="text-display text-foreground">Quiz Méthode Agile</h1>
        <p className="text-body text-muted">
          Testez vos connaissances sur Scrum, Kanban, SAFe et les pratiques agiles.
        </p>
        <div className="flex flex-wrap justify-center gap-stack">
          <Link
            href="/design-system"
            className="rounded-md bg-primary-600 px-card py-inline text-body font-medium text-white transition-colors hover:bg-primary-700"
          >
            Voir le design system
          </Link>
        </div>
      </div>
    </main>
  );
}
