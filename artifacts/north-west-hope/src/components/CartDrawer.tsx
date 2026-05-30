import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";

export function CartDrawer() {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen, updateQty, removeFromCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `Hello, I want to order:\n\n`;
    
    cartItems.forEach(item => {
      message += `${item.name} LCD x${item.quantity} - R${item.price * item.quantity}\n`;
    });

    message += `\nTotal: R${cartTotal}\n\n`;
    message += `My Name: ${name || "Not provided"}\n`;
    message += `My Number: ${phone || "Not provided"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27679785028?text=${encodedMessage}`, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-black border-l-border flex flex-col p-0" data-testid="cart-drawer">
        <SheetHeader className="p-6 border-b border-border text-left">
          <SheetTitle className="text-white flex items-center gap-2 font-bold text-xl">
            <ShoppingCart className="text-primary h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 bg-white/5 p-4 rounded-xl border border-white/10" data-testid={`cart-item-${item.id}`}>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-bold text-white leading-tight">{item.name}</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 text-muted-foreground hover:text-destructive shrink-0 -mt-1 -mr-1"
                      onClick={() => removeFromCart(item.id)}
                      data-testid={`button-remove-${item.id}`}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-black rounded-lg border border-border px-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-white hover:text-primary rounded-md"
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-bold text-white w-6 text-center text-sm">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-white hover:text-primary rounded-md"
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-bold text-[#00ff88]">R{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border bg-black/50 backdrop-blur-sm space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground font-medium">Subtotal</span>
              <span className="text-2xl font-black text-white" data-testid="text-cart-total">R{cartTotal}</span>
            </div>
            
            <div className="space-y-3">
              <Input 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus-visible:ring-primary"
                data-testid="input-cart-name"
              />
              <Input 
                placeholder="Your Phone Number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus-visible:ring-primary"
                data-testid="input-cart-phone"
              />
              <Button 
                onClick={handleCheckout}
                className="w-full bg-[#25d366] text-black hover:bg-[#25d366]/90 font-bold h-12 text-lg uppercase tracking-wide mt-2"
                data-testid="button-checkout-whatsapp"
              >
                Send Order via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
