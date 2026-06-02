import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Tab = "all" | "samsung" | "iphone" | "honor" | "tecno" | "redmi";

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: "all",     label: "All Models", count: products.length },
  { id: "samsung", label: "Samsung",    count: products.filter(p => p.category === "samsung").length },
  { id: "iphone",  label: "iPhone",     count: products.filter(p => p.category === "iphone").length },
  { id: "honor",   label: "Honor",      count: products.filter(p => p.category === "honor").length },
  { id: "tecno",   label: "Tecno",      count: products.filter(p => p.category === "tecno").length },
  { id: "redmi",   label: "Redmi",      count: products.filter(p => p.category === "redmi").length },
];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || product.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="bg-[#0a0a0a] py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-center mb-2">
            Screen <span className="text-primary">Prices</span>
          </h1>
          <p className="text-center text-white/40 font-medium mb-8 text-sm">
            {products.length} screens in stock — All Tested
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by phone model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 bg-black border-2 border-border focus-visible:border-primary text-white text-base rounded-xl"
              data-testid="input-search-products"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10">
        {/* Category Tabs — horizontally scrollable on mobile */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-primary text-black shadow-[0_0_16px_rgba(255,208,0,0.3)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              data-testid={`tab-${tab.id}`}
            >
              {tab.label}
              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? "bg-black/20 text-black" : "bg-white/10 text-white/40"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-white/30 text-sm font-medium mb-6">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"}
          {searchQuery && ` for "${searchQuery}"`}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-black text-white mb-2">No models found</h3>
            <p className="text-muted-foreground font-medium">Try a different search or{" "}
              <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer" className="text-[#25d366] underline">ask us on WhatsApp</a>
              {" "}if you don't see your device.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
