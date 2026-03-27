import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import type { Post } from "@/data/posts";
import CategoryBadge from "./CategoryBadge";

interface PostCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "featured";
}

const PostCard = ({ post, variant = "default" }: PostCardProps) => {
  if (variant === "featured") {
    return (
      <Link to={`/${post.slug}`} className="group block">
        <article className="relative rounded-2xl overflow-hidden h-80 md:h-96">
          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <CategoryBadge category={post.category} className="mb-3" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-foreground/90 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-white/70 text-sm line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} menit baca</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link to={`/${post.slug}`} className="group block">
        <article className="flex gap-4 items-start">
          <img src={post.image} alt={post.title} className="w-24 h-24 md:w-28 md:h-20 rounded-xl object-cover flex-shrink-0 transition-transform duration-300 group-hover:scale-105" loading="lazy" />
          <div className="min-w-0">
            <CategoryBadge category={post.category} size="sm" className="mb-1.5" />
            <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {post.title}
            </h3>
            <span className="text-xs text-muted-foreground mt-1 block">{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/${post.slug}`} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="p-5">
          <CategoryBadge category={post.category} className="mb-3" />
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
