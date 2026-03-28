import { Link } from "react-router-dom";
import { posts, categories } from "@/data/posts";
import SEOHead from "@/components/SEOHead";

const SitemapPage = () => {
  return (
    <>
      <SEOHead
        title="Sitemap - gratkapl.com"
        description="Peta situs gratkapl.com. Temukan semua artikel yang tersedia."
        canonical="https://gratkapl.com/sitemap"
      />
      <div className="duid-container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Sitemap</h1>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">📝 Artikel ({posts.length})</h2>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-start gap-2">
                <Link to={`/${post.slug}`} className="text-primary hover:underline text-sm flex-1">
                  {post.title}
                </Link>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{post.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;
