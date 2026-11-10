import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-fg sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fg-muted">
          The page you requested does not exist in this static export. Return home to continue.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </Container>
    </main>
  );
}
