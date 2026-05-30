import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm font-medium" data-testid="text-footer-copyright">
          &copy; 2026 North West Hope Business Marketing | All Rights Reserved
        </p>
        <Link
          href="/terms"
          className="text-primary/70 hover:text-primary text-sm font-bold transition-colors underline underline-offset-4"
          data-testid="link-footer-terms"
        >
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}
