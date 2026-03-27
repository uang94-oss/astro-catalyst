import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
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
      <SEOHead title="Cari Artikel" description="Cari artikel seputar keuangan, SEO, AI, dan blogging di DuidPro." />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">Cari Artikel</h1>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Ketik kata kunci..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>

        {query.trim() && (
          <p className="text-sm text-muted-foreground mb-6">
            {results.length} hasil untuk "<strong>{query}</strong>"
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {query.trim() && results.length === 0 && (
          <p className="text-center text-muted-foreground py-12">Tidak ada artikel yang ditemukan.</p>
        )}
      </main>
    </>
  );
};

export default SearchPage;
