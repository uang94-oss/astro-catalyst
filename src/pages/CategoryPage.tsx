import { useParams } from "react-router-dom";
import { getPostsByCategory, categories } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
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
        description={`Kumpulan artikel tentang ${category.name} di DuidPro. Pelajari tips, panduan, dan strategi terbaru.`}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: category.name }]} />

        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
          Kategori: {category.name}
        </h1>
        <p className="text-muted-foreground mb-8">
          {catPosts.length} artikel tentang {category.name}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {catPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {catPosts.length === 0 && (
              <p className="text-muted-foreground text-center py-12">Belum ada artikel dalam kategori ini.</p>
            )}
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
