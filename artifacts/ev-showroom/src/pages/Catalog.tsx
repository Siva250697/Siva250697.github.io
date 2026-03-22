import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BikeCard } from "@/components/BikeCard";
import { useListBikes, useListCategories } from "@workspace/api-client-react";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { useSearch } from "wouter";

export function Catalog() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  
  const initialCategoryId = searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined;
  
  const [categoryId, setCategoryId] = useState<number | undefined>(initialCategoryId);
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  const { data: bikes, isLoading: isLoadingBikes } = useListBikes({
    categoryId,
    minPrice,
    maxPrice,
  });
  
  const { data: categories } = useListCategories();

  return (
    <Layout>
      <div className="pt-24 pb-12 bg-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Inventory Catalog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse our complete collection of premium electric bikes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 font-display font-semibold text-lg mb-6 pb-4 border-b border-white/5">
                <Filter className="w-5 h-5 text-primary" />
                Filters
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      className="w-4 h-4 accent-primary bg-secondary border-border"
                      checked={categoryId === undefined}
                      onChange={() => setCategoryId(undefined)}
                    />
                    <span className="group-hover:text-primary transition-colors">All Models</span>
                  </label>
                  {categories?.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        className="w-4 h-4 accent-primary bg-secondary border-border"
                        checked={categoryId === cat.id}
                        onChange={() => setCategoryId(cat.id)}
                      />
                      <span className="group-hover:text-primary transition-colors">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Min Price ($)</label>
                    <input 
                      type="number"
                      placeholder="0"
                      className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      value={minPrice || ""}
                      onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Max Price ($)</label>
                    <input 
                      type="number"
                      placeholder="10000"
                      className="w-full bg-secondary border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      value={maxPrice || ""}
                      onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
                    />
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-semibold">{bikes?.length || 0}</span> results
              </p>
              
              {/* Optional: Add sort dropdown here in future */}
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Sort By
              </button>
            </div>

            {/* Grid */}
            {isLoadingBikes ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-[450px] rounded-2xl bg-card animate-pulse border border-white/5" />
                ))}
              </div>
            ) : bikes && bikes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {bikes.map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-2xl border border-white/5">
                <Search className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">No bikes found</h3>
                <p className="text-muted-foreground max-w-sm">
                  We couldn't find any models matching your current filters. Try adjusting your criteria.
                </p>
                <button 
                  onClick={() => {
                    setCategoryId(undefined);
                    setMinPrice(undefined);
                    setMaxPrice(undefined);
                  }}
                  className="mt-6 px-6 py-2 rounded-lg bg-secondary text-foreground hover:bg-white/10 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
