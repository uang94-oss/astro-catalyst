import type { Post } from "@/data/posts";
import { Link } from "react-router-dom";

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  if (!posts.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-foreground mb-4">Artikel Terkait</h2>
      <div className="grid gap-4 grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <Link key={post.id} to={`/${post.slug}`} className="duid-card animate-fade-in block">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-xs line-clamp-2 mb-1 text-foreground">{post.title}</h3>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="text-primary font-medium">{post.category.toLowerCase()}</span>
                <span>·</span>
                <span>{post.readTime} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
