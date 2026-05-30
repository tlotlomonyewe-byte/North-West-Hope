import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "samsung" | "iphone">("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || product.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="bg-secondary py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-center mb-8">Screen Prices</h1>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              type="text"
              placeholder="Search for your phone model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 bg-black border-2 border-border focus-visible:border-primary text-white text-lg rounded-xl"
              data-testid="input-search-products"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-colors ${
              activeTab === "all" 
                ? "bg-primary text-black" 
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
            data-testid="tab-all"
          >
            All Models
          </button>
          <button 
            onClick={() => setActiveTab("samsung")}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-colors ${
              activeTab === "samsung" 
                ? "bg-primary text-black" 
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
            data-testid="tab-samsung"
          >
            Samsung
          </button>
          <button 
            onClick={() => setActiveTab("iphone")}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-colors ${
              activeTab === "iphone" 
                ? "bg-primary text-black" 
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
            data-testid="tab-iphone"
          >
            iPhone
          </button>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-white mb-2">No models found</h3>
            <p className="text-muted-foreground">Try adjusting your search or contact us if you don't see your device.</p>
          </div>
        )}
      </div>
    </div>
  );
}
