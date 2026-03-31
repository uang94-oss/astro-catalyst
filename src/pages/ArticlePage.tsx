import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "@/data/posts";
import { Calendar, Clock } from "lucide-react";
import BacaJuga from "@/components/BacaJuga";
import RelatedPosts from "@/components/RelatedPosts";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";
import AdSlot from "@/components/ads/AdSlot";
import ParallaxAd from "@/components/ads/ParallaxAd";
import MobileStickyAd from "@/components/ads/MobileStickyAd";
import ReactMarkdown from 'react-markdown';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post, 4);
  const bacaJugaPosts = related.slice(0, 3);
  const articleUrl = `https://gratkapl.com/${post.slug}`;

  const paragraphs = post.content.split("\n\n");
  const insertIndex = Math.min(2, paragraphs.length - 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "gratkapl.com" },
  };

  const toId = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  const renderBlock = (block: string, i: number) => {
    if (block.startsWith("## ")) {
      const t = block.replace("## ", "");
      return <h2 key={`b-${i}`} id={toId(t)}>{t}</h2>;
    }
    if (block.startsWith("### ")) {
      const t = block.replace("### ", "");
      return <h3 key={`b-${i}`} id={toId(t)}>{t}</h3>;
    }
    if (block.includes("**")) {
      const parts = block.split(/\*\*/g);
      return <p key={`b-${i}`}>{parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : part))}</p>;
    }
    return <p key={`b-${i}`}>{block}</p>;
  };

  // Build content with ads injected at strategic positions
  const buildContentWithAds = () => {
    const elements: React.ReactNode[] = [];
    const bacaInsert = Math.min(2, paragraphs.length - 1);

    paragraphs.forEach((block, i) => {
      elements.push(renderBlock(block, i));

      // After paragraph 3 → Parallax Ad
      if (i === 2) {
        elements.push(<ParallaxAd key="parallax-ad" />);
      }

      // After paragraph 3 (bacaJuga insert point)
      if (i === bacaInsert) {
        elements.push(<BacaJuga key="baca-juga" posts={bacaJugaPosts} />);
      }

      // After paragraph 6 → Inline Ad
      if (i === 5) {
        elements.push(<AdSlot key="inline-ad-1" format="responsive" label="Sponsored" />);
      }

      // After paragraph 9 → Inline Ad (optional, only if enough content)
      if (i === 8 && paragraphs.length > 10) {
        elements.push(<AdSlot key="inline-ad-2" format="responsive" label="Sponsored" />);
      }
    });

    return elements;
  };

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} image={post.image} type="article" publishedTime={post.date} author={post.author} jsonLd={jsonLd} />

      <div className="duid-container py-4">
        {/* Above the fold ad */}
        <AdSlot format="horizontal" className="mb-4" label="Advertisement" />

        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          ← Kembali
        </Link>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-5 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Category */}
        <span className="text-primary font-medium text-sm">{post.category.toLowerCase()}</span>

        {/* H1 */}
        <h1 className="text-2xl font-extrabold text-foreground leading-tight mt-2 mb-3">
          {post.title}
        </h1>

        {/* Share buttons after title */}
        <ShareButtons url={articleUrl} title={post.title} />

        {/* Author info */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <img
            src={`https://ui-avatars.com/api/?name=${post.author}&background=4a90d9&color=fff&size=128`}
            alt={post.author}
            className="w-9 h-9 rounded-full"
          />
          <div>
            <span className="font-medium text-sm text-foreground block">{post.author}</span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} min</span>
            </div>
          </div>
        </div>

        {/* AI Overview */}
        {post.aiOverview && (
          <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-sm text-muted-foreground leading-relaxed italic">{post.aiOverview}</p>
          </div>
        )}

        {/* Table of Contents */}
        <TableOfContents content={post.content} />

        {/* Content with injected ads */}
        <div className="article-content">
          {buildContentWithAds()}
        </div>

        {/* Below article ad */}
        <AdSlot format="responsive" className="mt-6" label="Advertisement" />

        {/* Tags */}
        <div className="mt-8 pt-5 border-t border-border flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>

        {/* Share after content */}
        <ShareButtons url={articleUrl} title={post.title} />

        <RelatedPosts posts={related} />
      </div>

      <MobileStickyAd />
    </>
  );
};

export default ArticlePage;
