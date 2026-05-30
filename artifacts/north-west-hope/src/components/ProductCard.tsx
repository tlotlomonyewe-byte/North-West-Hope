import { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, updateQty } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);
  const isSamsung = product.category === "samsung";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col border border-white/10 hover:border-primary/60 transition-all duration-300 bg-[#0d0d0d] shadow-lg hover:shadow-[0_0_30px_rgba(255,208,0,0.15)]"
      data-testid={`card-product-${product.id}`}
    >
      {/* Glow edge on hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-primary/0 group-hover:border-primary/40 transition-all duration-500 z-10" />

      {/* Image area */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-xs font-bold text-white">In Stock</span>
        </div>
        <div className="absolute top-3 right-3 z-20 bg-primary px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(255,208,0,0.4)]">
          <span className="text-[10px] font-black text-black uppercase tracking-widest">All Tested</span>
        </div>

        {/* Category pill */}
        <div className={`absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
          isSamsung
            ? "bg-blue-600/80 border-blue-400/30 text-white"
            : "bg-gray-700/80 border-gray-500/30 text-white"
        }`}>
          {isSamsung ? "Samsung" : "iPhone"}
        </div>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-base font-black text-white leading-tight tracking-tight" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-xs text-white/40 font-medium mt-0.5">LCD Screen Replacement</p>
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-white/40 font-medium">Price</span>
            <span className="text-2xl font-black text-[#00ff88] leading-none" data-testid={`text-price-${product.id}`}>
              R{product.price}
            </span>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5 text-center">
            <div className="text-[9px] text-primary/70 font-bold uppercase">Free</div>
            <div className="text-[10px] text-primary font-black uppercase leading-none">Protector</div>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto">
          {cartItem ? (
            <div className="flex items-center justify-between bg-white/5 rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => updateQty(product.id, cartItem.quantity - 1)}
                className="flex-1 py-3 flex items-center justify-center text-white hover:text-primary hover:bg-white/5 transition-colors"
                data-testid={`button-decrement-${product.id}`}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-black text-white text-lg w-10 text-center" data-testid={`text-qty-${product.id}`}>
                {cartItem.quantity}
              </span>
              <button
                onClick={() => updateQty(product.id, cartItem.quantity + 1)}
                className="flex-1 py-3 flex items-center justify-center text-white hover:text-primary hover:bg-white/5 transition-colors"
                data-testid={`button-increment-${product.id}`}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Button
              onClick={() => addToCart(product)}
              className="w-full bg-primary text-black font-black hover:bg-primary/90 transition-all rounded-xl h-11 text-sm shadow-[0_0_20px_rgba(255,208,0,0.2)] hover:shadow-[0_0_28px_rgba(255,208,0,0.4)]"
              data-testid={`button-add-cart-${product.id}`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
