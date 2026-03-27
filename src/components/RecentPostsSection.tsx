import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";

const RecentPostsSection = ({ posts }: { posts: Post[] }) => (
  <section className="duid-container py-6">
    <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.id} to={`/${post.slug}`} className="duid-card animate-fade-in block">
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold line-clamp-2 mb-2 text-foreground">{post.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary font-medium">{post.category.toLowerCase()}</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readTime} min</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default RecentPostsSection;
