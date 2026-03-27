import { posts, getFeaturedPosts } from "@/data/posts";
import StoryCategories from "@/components/StoryCategories";
import FeaturedSlider from "@/components/FeaturedSlider";
import ForYouSection from "@/components/ForYouSection";
import FeaturedPostsSection from "@/components/FeaturedPostsSection";
import RecentPostsSection from "@/components/RecentPostsSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const featured = getFeaturedPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DuidPro",
    url: "https://duidpro.com",
    description: "Platform edukasi keuangan, teknologi, SEO, dan blogging",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://duidpro.com/cari?q={search_term_string}",
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

      <StoryCategories />
      <FeaturedSlider posts={featured} />
      <ForYouSection />
      <FeaturedPostsSection posts={featured} />
      <RecentPostsSection posts={posts} />
    </>
  );
};

export default Index;
