import { Link } from "wouter";
import { Wrench, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-primary bg-black">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="font-black text-primary tracking-tight text-xl">NORTH WEST HOPE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white hover:text-primary transition-colors font-medium" data-testid="link-nav-home">Home</Link>
          <Link href="/shop" className="text-white hover:text-primary transition-colors font-medium" data-testid="link-nav-shop">Shop</Link>
          <Link href="/contact" className="text-white hover:text-primary transition-colors font-medium" data-testid="link-nav-contact">Contact</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Button asChild className="bg-primary text-black hover:bg-primary/90 font-bold rounded-full px-6" data-testid="button-call-now">
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
            <SheetContent side="right" className="bg-black border-l-border sm:max-w-xs p-6 pt-16">
              <div className="flex flex-col gap-6">
                <Link href="/" className="text-white text-lg hover:text-primary font-medium" data-testid="link-mobile-home">Home</Link>
                <Link href="/shop" className="text-white text-lg hover:text-primary font-medium" data-testid="link-mobile-shop">Shop</Link>
                <Link href="/contact" className="text-white text-lg hover:text-primary font-medium" data-testid="link-mobile-contact">Contact</Link>
                <Button asChild className="bg-primary text-black hover:bg-primary/90 font-bold mt-4" data-testid="button-mobile-call">
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
