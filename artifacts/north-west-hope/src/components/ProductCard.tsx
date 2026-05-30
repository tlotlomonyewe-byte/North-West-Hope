import { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, updateQty } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <Card className="bg-card border-card-border overflow-hidden flex flex-col group relative" data-testid={`card-product-${product.id}`}>
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur px-2.5 py-1 rounded-full border border-border">
        <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
        <span className="text-xs font-semibold text-white">In Stock</span>
      </div>
      <div className="absolute top-2 right-2 z-10 bg-primary px-2.5 py-1 rounded-full shadow-lg">
        <span className="text-xs font-bold text-black uppercase tracking-tight">All Tested</span>
      </div>

      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-black">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">{product.name}</h3>
          <div className="inline-block bg-[#00ff88]/10 border border-[#00ff88]/30 px-3 py-1 rounded-md">
            <span className="text-[#00ff88] font-bold text-lg" data-testid={`text-price-${product.id}`}>R{product.price}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto">
          {cartItem ? (
            <div className="flex items-center justify-between bg-black rounded-lg border border-border overflow-hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => updateQty(product.id, cartItem.quantity - 1)}
                className="text-white hover:text-primary hover:bg-white/5 rounded-none"
                data-testid={`button-decrement-${product.id}`}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-bold text-white w-8 text-center" data-testid={`text-qty-${product.id}`}>{cartItem.quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => updateQty(product.id, cartItem.quantity + 1)}
                className="text-white hover:text-primary hover:bg-white/5 rounded-none"
                data-testid={`button-increment-${product.id}`}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => addToCart(product)} 
              className="w-full bg-primary text-black font-bold hover:bg-primary/90 transition-colors"
              data-testid={`button-add-cart-${product.id}`}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
