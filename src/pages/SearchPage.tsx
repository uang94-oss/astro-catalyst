import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { posts } from "@/data/posts";
import SEOHead from "@/components/SEOHead";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <SEOHead title="Cari Artikel" description="Cari artikel di DuidPro." />

      <div className="duid-container py-6">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">Cari Artikel</h1>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Ketik kata kunci..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>

        {query.trim() && (
          <p className="text-sm text-muted-foreground mb-6">
            {results.length} hasil untuk "<strong>{query}</strong>"
          </p>
        )}

        <div className="space-y-4">
          {results.map((post) => (
            <Link
              key={post.id}
              to={`/${post.slug}`}
              className="duid-card flex gap-4 p-3 animate-fade-in"
            >
              <div className="w-28 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-foreground">{post.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{post.category.toLowerCase()}</span>
                  <span>·</span>
                  <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {query.trim() && results.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Tidak ada artikel yang ditemukan.</p>
        )}
      </div>
    </>
  );
};

export default SearchPage;
