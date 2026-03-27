import { posts, getFeaturedPosts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const featured = getFeaturedPosts();
  const latest = posts.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DuidPro",
    url: "https://duidpro.gilatemax.com",
    description: "Platform edukasi keuangan, teknologi, SEO, dan blogging",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://duidpro.gilatemax.com/cari?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEOHead
        title="DuidPro - Edukasi Keuangan, SEO & AI"
        description="Platform edukasi keuangan, teknologi, SEO, dan blogging untuk membantu kamu meraih kebebasan finansial dan digital."
        jsonLd={jsonLd}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Featured Section */}
        {featured.length > 0 && (
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.slice(0, 2).map((post) => (
                <PostCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </section>
        )}

        {/* Main + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Artikel Terbaru
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {latest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
