import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CartProvider, useCart } from "./hooks/useCart";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

// Floating Cart Button that uses the context
function FloatingCart() {
  const { cartCount, setIsCartOpen } = useCart();
  
  return (
    <Button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary text-black hover:bg-primary/90 shadow-xl z-40 flex items-center justify-center p-0 border-2 border-black"
      data-testid="button-floating-cart"
    >
      <ShoppingCart className="h-7 w-7" />
      {cartCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
          {cartCount}
        </div>
      )}
    </Button>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </CartProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
