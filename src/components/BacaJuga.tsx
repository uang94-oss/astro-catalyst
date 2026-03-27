import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";

interface BacaJugaProps {
  posts: Post[];
}

const BacaJuga = ({ posts }: BacaJugaProps) => {
  if (!posts.length) return null;

  return (
    <div className="baca-juga">
      <strong>Baca Juga:</strong>
      <ul>
        {posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            <Link to={`/${post.slug}`} title={post.title}>
              {post.excerpt.split(".")[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BacaJuga;
