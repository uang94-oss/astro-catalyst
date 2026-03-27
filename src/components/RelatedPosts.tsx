import type { Post } from "@/data/posts";
import PostCard from "./PostCard";

interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-1.5 h-7 bg-primary rounded-full" />
        Artikel Terkait
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
