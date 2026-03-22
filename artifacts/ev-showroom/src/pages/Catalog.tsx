import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { BikeCard } from "@/components/BikeCard";
import { useListBikes, useListCategories } from "@workspace/api-client-react";
import type { Bike } from "@workspace/api-client-react";
import { Filter, SlidersHorizontal, Search, ChevronDown } from "lucide-react";
import { useSearch } from "wouter";

type SortOption = "name_asc" | "range_desc";

const sortLabels: Record<SortOption, string> = {
  name_asc: "Name: A–Z",
  range_desc: "Range: Highest First",
};

function sortBikes(bikes: Bike[], sort: SortOption): Bike[] {
  return [...bikes].sort((a, b) => {
    switch (sort) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "range_desc":
        return b.rangeKm - a.rangeKm;
    }
  });
}

export function Catalog() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialCategoryId = searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined;

  const [categoryId, setCategoryId] = useState<number | undefined>(initialCategoryId);
  const [sortBy, setSortBy] = useState<SortOption>("name_asc");
  const [sortOpen, setSortOpen] = useState(false);

  const { data: bikes, isLoading: isLoadingBikes } = useListBikes({ categoryId });
  const { data: categories } = useListCategories();

  const sortedBikes = useMemo(() => {
    if (!bikes) return [];
    return sortBikes(bikes, sortBy);
  }, [bikes, sortBy]);

  return (
    <Layout>
      <div className="pt-24 pb-12 bg-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Models</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse our complete range of premium electric scooters — choose the one that fits your journey.
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

              {/* Brand / Category */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Brand</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      className="w-4 h-4 accent-primary"
                      checked={categoryId === undefined}
                      onChange={() => setCategoryId(undefined)}
                    />
                    <span className="group-hover:text-primary transition-colors">All Brands</span>
                  </label>
                  {categories?.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        className="w-4 h-4 accent-primary"
                        checked={categoryId === cat.id}
                        onChange={() => setCategoryId(cat.id)}
                      />
                      <span className="group-hover:text-primary transition-colors">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-semibold">{sortedBikes.length}</span> models
              </p>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors bg-card border border-white/10 rounded-lg px-4 py-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  {sortLabels[sortBy]}
                  <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                </button>

                {sortOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-card border border-white/10 rounded-xl shadow-2xl z-10 overflow-hidden">
                    {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => { setSortBy(key); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors ${
                          sortBy === key ? "text-primary font-semibold" : "text-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            {isLoadingBikes ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-[450px] rounded-2xl bg-card animate-pulse border border-white/5" />
                ))}
              </div>
            ) : sortedBikes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedBikes.map((bike) => (
                  <BikeCard key={bike.id} bike={bike} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-2xl border border-white/5">
                <Search className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">No models found</h3>
                <p className="text-muted-foreground max-w-sm">
                  No scooters match your current filters. Try adjusting your criteria.
                </p>
                <button
                  onClick={() => setCategoryId(undefined)}
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
