import { MapPin, Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Find Us</h1>
          <div className="w-24 h-2 bg-primary mx-auto"></div>
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
                  <Button asChild className="bg-[#25d366] text-black hover:bg-[#25d366]/90 font-bold">
                    <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="bg-primary text-black hover:bg-primary/90 font-bold">
                    <a href="tel:0761128528">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </a>
                  </Button>
                  <Button asChild className="bg-[#1877f2] text-white hover:bg-[#1877f2]/90 font-bold">
                    <a href="https://www.facebook.com/share/1JAx3hwvnT/" target="_blank" rel="noreferrer">
                      <Facebook className="mr-2 h-4 w-4" /> Facebook
                    </a>
                  </Button>
                  <Button asChild className="bg-[#ff0050] text-white hover:bg-[#ff0050]/90 font-bold">
                    <a href="https://www.tiktok.com/@northwesthope04" target="_blank" rel="noreferrer">
                      TikTok
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card border border-border rounded-3xl h-[400px] lg:h-full min-h-[400px] overflow-hidden relative flex items-center justify-center">
            {/* Visual map placeholder representing location */}
            <div className="absolute inset-0 bg-secondary opacity-50"></div>
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="relative z-10 text-center p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 m-6">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Klerksdorp</h3>
              <p className="text-muted-foreground font-medium">Behind Western Bazaar</p>
              <Button asChild variant="outline" className="mt-6 bg-white/5 border-white/10 hover:bg-white/10 hover:text-white">
                <a href="https://maps.google.com/?q=Western+Bazaar+Klerksdorp" target="_blank" rel="noreferrer">
                  Open in Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
