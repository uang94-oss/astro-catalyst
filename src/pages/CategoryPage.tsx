import { useParams, Link } from "react-router-dom";
import { getPostsByCategory, categories } from "@/data/posts";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <NotFound />;

  const catPosts = getPostsByCategory(category.name);

  return (
    <>
      <SEOHead
        title={`Kategori ${category.name}`}
        description={`Kumpulan artikel tentang ${category.name} di DuidPro.`}
      />

      <div className="duid-container py-6">
        <h1 className="text-2xl font-extrabold text-foreground mb-1">
          {category.name}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">{catPosts.length} artikel</p>

        <div className="space-y-4">
          {catPosts.map((post) => (
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
          {catPosts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Belum ada artikel.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
