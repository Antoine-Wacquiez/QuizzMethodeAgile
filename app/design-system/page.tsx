import Link from "next/link";

const colorGroups = [
  {
    name: "Primaire",
    swatches: [
      { shade: "50", className: "bg-primary-50" },
      { shade: "100", className: "bg-primary-100" },
      { shade: "200", className: "bg-primary-200" },
      { shade: "300", className: "bg-primary-300" },
      { shade: "400", className: "bg-primary-400" },
      { shade: "500", className: "bg-primary-500" },
      { shade: "600", className: "bg-primary-600" },
      { shade: "700", className: "bg-primary-700" },
      { shade: "800", className: "bg-primary-800" },
      { shade: "900", className: "bg-primary-900" },
    ],
  },
  {
    name: "Secondaire",
    swatches: [
      { shade: "50", className: "bg-secondary-50" },
      { shade: "100", className: "bg-secondary-100" },
      { shade: "200", className: "bg-secondary-200" },
      { shade: "300", className: "bg-secondary-300" },
      { shade: "400", className: "bg-secondary-400" },
      { shade: "500", className: "bg-secondary-500" },
      { shade: "600", className: "bg-secondary-600" },
      { shade: "700", className: "bg-secondary-700" },
      { shade: "800", className: "bg-secondary-800" },
      { shade: "900", className: "bg-secondary-900" },
    ],
  },
  {
    name: "Succès",
    swatches: [
      { shade: "50", className: "bg-success-50" },
      { shade: "100", className: "bg-success-100" },
      { shade: "500", className: "bg-success-500" },
      { shade: "600", className: "bg-success-600" },
      { shade: "700", className: "bg-success-700" },
    ],
  },
  {
    name: "Erreur",
    swatches: [
      { shade: "50", className: "bg-error-50" },
      { shade: "100", className: "bg-error-100" },
      { shade: "500", className: "bg-error-500" },
      { shade: "600", className: "bg-error-600" },
      { shade: "700", className: "bg-error-700" },
    ],
  },
] as const;

const typographySamples = [
  { label: "Display", className: "text-display", sample: "Quiz Méthode Agile" },
  { label: "Title", className: "text-title", sample: "Scrum, Kanban & SAFe" },
  { label: "Heading", className: "text-heading", sample: "Question 3 sur 10" },
  { label: "Body", className: "text-body", sample: "Quelle cérémonie Scrum permet de planifier le travail du sprint ?" },
  { label: "Caption", className: "text-caption text-muted", sample: "Temps restant : 45 secondes" },
  { label: "Label", className: "text-label uppercase tracking-wide text-muted", sample: "Bonne réponse" },
] as const;

const spacingSamples = [
  { name: "inline", className: "gap-inline" },
  { name: "stack", className: "gap-stack" },
  { name: "card", className: "gap-card" },
  { name: "section", className: "gap-section" },
] as const;

function ColorSwatch({ shade, className }: { shade: string; className: string }) {
  const isLight = ["50", "100", "200", "300"].includes(shade);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex h-14 items-end rounded-md border border-border p-2 ${className} ${isLight ? "text-foreground" : "text-white"}`}
      >
        <span className="text-label font-mono">{shade}</span>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-card py-section">
      <header className="mb-section flex flex-col gap-stack">
        <Link
          href="/"
          className="text-caption text-primary-600 transition-colors hover:text-primary-700"
        >
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="text-display text-foreground">Design System</h1>
        <p className="max-w-2xl text-body text-muted">
          Palette de couleurs, typographie et espacements du quiz sur les méthodes agiles.
        </p>
      </header>

      <section className="mb-section flex flex-col gap-card">
        <h2 className="text-title text-foreground">Couleurs</h2>
        <div className="flex flex-col gap-card">
          {colorGroups.map((group) => (
            <div key={group.name} className="rounded-xl border border-border bg-surface p-card">
              <h3 className="mb-stack text-heading text-foreground">{group.name}</h3>
              <div className="grid grid-cols-2 gap-inline sm:grid-cols-5 lg:grid-cols-10">
                {group.swatches.map((swatch) => (
                  <ColorSwatch key={swatch.shade} shade={swatch.shade} className={swatch.className} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-card sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-card">
            <p className="mb-inline text-label uppercase tracking-wide text-muted">Surface</p>
            <div className="rounded-lg border border-border bg-surface p-card text-body">
              Fond de carte (surface)
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background p-card">
            <p className="mb-inline text-label uppercase tracking-wide text-muted">Background</p>
            <div className="rounded-lg bg-background p-card text-body ring-1 ring-border">
              Fond de page (background)
            </div>
          </div>
        </div>
      </section>

      <section className="mb-section flex flex-col gap-card">
        <h2 className="text-title text-foreground">Typographie</h2>
        <div className="rounded-xl border border-border bg-surface p-card">
          <div className="flex flex-col gap-card">
            {typographySamples.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-inline border-b border-border pb-card last:border-0 last:pb-0 sm:flex-row sm:items-baseline"
              >
                <span className="w-24 shrink-0 font-mono text-label text-muted">{item.label}</span>
                <p className={item.className}>{item.sample}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-card">
          <p className="mb-stack text-label uppercase tracking-wide text-muted">Police monospace</p>
          <code className="font-mono text-body text-secondary-700">
            const sprint = new Sprint(&quot;Sprint 12&quot;, 14);
          </code>
        </div>
      </section>

      <section className="mb-section flex flex-col gap-card">
        <h2 className="text-title text-foreground">Espacements</h2>
        <div className="rounded-xl border border-border bg-surface p-card">
          <div className="flex flex-col gap-card">
            {spacingSamples.map((item) => (
              <div key={item.name} className="flex items-center gap-stack">
                <span className="w-20 font-mono text-label text-muted">{item.name}</span>
                <div className={`flex ${item.className}`}>
                  <div className="h-8 w-8 rounded-sm bg-primary-200" />
                  <div className="h-8 w-8 rounded-sm bg-primary-400" />
                  <div className="h-8 w-8 rounded-sm bg-primary-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-card">
        <h2 className="text-title text-foreground">Composants d&apos;exemple</h2>
        <div className="flex flex-wrap gap-stack">
          <button
            type="button"
            className="rounded-md bg-primary-600 px-card py-inline text-body font-medium text-white transition-colors hover:bg-primary-700"
          >
            Bouton primaire
          </button>
          <button
            type="button"
            className="rounded-md bg-secondary-600 px-card py-inline text-body font-medium text-white transition-colors hover:bg-secondary-700"
          >
            Bouton secondaire
          </button>
          <span className="inline-flex items-center rounded-md bg-success-100 px-stack py-inline text-caption font-medium text-success-700">
            Succès
          </span>
          <span className="inline-flex items-center rounded-md bg-error-100 px-stack py-inline text-caption font-medium text-error-700">
            Erreur
          </span>
        </div>
      </section>
    </div>
  );
}
