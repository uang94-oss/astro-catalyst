import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";

const FeaturedPostsSection = ({ posts }: { posts: Post[] }) => (
  <section className="duid-container py-6">
    <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
    <div className="space-y-6">
      {posts.slice(0, 3).map((post) => (
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
            <h3 className="font-bold text-lg line-clamp-2 mb-2 text-foreground">{post.title}</h3>
            <div className="flex items-center gap-3">
              <img
                src={`https://ui-avatars.com/api/?name=Admin&background=4a90d9&color=fff&size=128`}
                alt="Admin"
                className="w-7 h-7 rounded-full"
                loading="lazy"
              />
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{post.author}</span>
                <div className="flex items-center gap-2">
                  <span className="text-primary">{post.category.toLowerCase()}</span>
                  <span>·</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default FeaturedPostsSection;
