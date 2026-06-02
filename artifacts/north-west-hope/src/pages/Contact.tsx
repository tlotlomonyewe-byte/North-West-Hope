import { MapPin, Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Find Us</h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info Card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Shop</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    Shop 6, Commissioner Street<br />
                    (CellC Container, Behind Western Bazaar)<br />
                    Klerksdorp, North West
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:0761128528" className="text-2xl font-black text-white hover:text-primary transition-colors">
                    076 112 8528
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25d366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#25d366]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer" className="text-2xl font-black text-white hover:text-[#25d366] transition-colors">
                    067 978 5028
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#25d366] text-black hover:bg-[#25d366]/90 font-bold" data-testid="button-contact-whatsapp">
                    <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="bg-primary text-black hover:bg-primary/90 font-bold" data-testid="button-contact-call">
                    <a href="tel:0761128528">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </a>
                  </Button>
                  <Button asChild className="bg-[#1877f2] text-white hover:bg-[#1877f2]/90 font-bold" data-testid="button-contact-facebook">
                    <a href="https://www.facebook.com/share/1JAx3hwvnT/" target="_blank" rel="noreferrer">
                      <Facebook className="mr-2 h-4 w-4" /> Facebook
                    </a>
                  </Button>
                  <Button asChild className="bg-[#ff0050] text-white hover:bg-[#ff0050]/90 font-bold" data-testid="button-contact-tiktok">
                    <a href="https://www.tiktok.com/@northwesthope04" target="_blank" rel="noreferrer">
                      TikTok
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden relative flex flex-col" style={{ minHeight: 420 }}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(255,208,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,208,0,0.4) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-8 text-center gap-6">
              {/* Pulsing pin */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
                <div className="relative w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-1">Klerksdorp</h3>
                <p className="text-white/50 font-medium text-sm leading-relaxed">
                  Shop 6, Commissioner Street<br />
                  Behind Western Bazaar
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/J9p5wHGBS5MLAipE9?g_st=ac"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-black font-black px-6 py-3 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(255,208,0,0.3)] hover:shadow-[0_0_28px_rgba(255,208,0,0.5)] text-sm"
                data-testid="link-open-maps"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
