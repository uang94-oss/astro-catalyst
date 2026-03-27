import { Link } from "react-router-dom";
import { posts, categories } from "@/data/posts";
import PostCard from "./PostCard";

const Sidebar = () => {
  const popularPosts = [...posts].sort((a, b) => b.readTime - a.readTime).slice(0, 4);

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Artikel Populer
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="horizontal" />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Kategori
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category.toLowerCase() === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                to={`/kategori/${cat.slug}`}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm"
              >
                <span className="text-foreground font-medium">{cat.name}</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{count}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Tag Populer
        </h3>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(posts.flatMap((p) => p.tags))).slice(0, 12).map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
