import { getFeaturedPosts } from "@/data/posts";
import StoryCategories from "@/components/StoryCategories";
import FeaturedSlider from "@/components/FeaturedSlider";
import ForYouSection from "@/components/ForYouSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const featured = getFeaturedPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "gratkapl.com",
    url: "https://gratkapl.com",
    description: "Blog teknologi modern yang membahas AI, programming, web design, dan SEO.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gratkapl.com/cari?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEOHead
        title="gratkapl.com - AI, Programming, Web Design & SEO"
        description="Blog teknologi modern yang membahas AI, programming, web design, dan SEO."
        jsonLd={jsonLd}
      />

      <StoryCategories />
      <FeaturedSlider posts={featured} />
      <ForYouSection />
    </>
  );
};

export default Index;
