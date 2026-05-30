import { Link } from "wouter";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImg from "@assets/1000500959_1780116242325.jpg";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-primary bg-black">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
          <img
            src={logoImg}
            alt="North West Hope Business Marketing"
            className="h-14 w-14 rounded-full border-2 border-primary object-cover shadow-[0_0_12px_rgba(255,208,0,0.4)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-black text-primary tracking-tight text-lg uppercase leading-none">North West Hope</span>
            <span className="text-[10px] text-white/60 font-semibold uppercase tracking-widest">Business Marketing</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-primary transition-colors font-bold uppercase text-sm tracking-wider" data-testid="link-nav-home">Home</Link>
          <Link href="/shop" className="text-white hover:text-primary transition-colors font-bold uppercase text-sm tracking-wider" data-testid="link-nav-shop">Shop</Link>
          <Link href="/contact" className="text-white hover:text-primary transition-colors font-bold uppercase text-sm tracking-wider" data-testid="link-nav-contact">Contact</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Button asChild className="bg-primary text-black hover:bg-primary/90 font-black rounded-full px-6 h-11 shadow-[0_0_16px_rgba(255,208,0,0.3)]" data-testid="button-call-now">
            <a href="tel:0761128528">
              <Phone className="mr-2 h-4 w-4" />
              CALL NOW
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-primary/30 sm:max-w-xs p-6 pt-16">
              <div className="flex flex-col gap-6">
                <Link href="/" className="text-white text-lg hover:text-primary font-bold uppercase tracking-wider" data-testid="link-mobile-home">Home</Link>
                <Link href="/shop" className="text-white text-lg hover:text-primary font-bold uppercase tracking-wider" data-testid="link-mobile-shop">Shop</Link>
                <Link href="/contact" className="text-white text-lg hover:text-primary font-bold uppercase tracking-wider" data-testid="link-mobile-contact">Contact</Link>
                <Button asChild className="bg-primary text-black hover:bg-primary/90 font-black mt-4 rounded-full" data-testid="button-mobile-call">
                  <a href="tel:0761128528">
                    <Phone className="mr-2 h-4 w-4" />
                    CALL NOW
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
