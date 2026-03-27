import { useParams } from "react-router-dom";
import { getPostBySlug, getRelatedPosts, posts } from "@/data/posts";
import { Calendar, Clock, User } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import Breadcrumbs from "@/components/Breadcrumbs";
import BacaJuga from "@/components/BacaJuga";
import RelatedPosts from "@/components/RelatedPosts";
import Sidebar from "@/components/Sidebar";
import SEOHead from "@/components/SEOHead";
import NotFound from "./NotFound";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post, 4);
  const bacaJugaPosts = related.slice(0, 3);

  // Split content into paragraphs and inject "Baca Juga" after 2nd paragraph
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
    publisher: { "@type": "Organization", name: "DuidPro" },
  };

  const faqSection = post.content.includes("## FAQ");
  let faqJsonLd: object | undefined;
  if (faqSection) {
    const faqPart = post.content.split("## FAQ")[1];
    const faqItems = faqPart.split("**").filter((s) => s.trim());
    const pairs: { q: string; a: string }[] = [];
    for (let i = 0; i < faqItems.length - 1; i += 2) {
      pairs.push({ q: faqItems[i].trim(), a: faqItems[i + 1]?.trim() || "" });
    }
    if (pairs.length) {
      faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: pairs.map((p) => ({
          "@type": "Question",
          name: p.q,
          acceptedAnswer: { "@type": "Answer", text: p.a },
        })),
      };
    }
  }

  const renderContent = (text: string) => {
    // Simple markdown-like rendering
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i}>{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("### ")) {
        return <h3 key={i}>{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return <p key={i}><strong>{block.replace(/\*\*/g, "")}</strong></p>;
      }
      // Handle FAQ Q&A
      if (block.includes("**")) {
        const parts = block.split(/\*\*/g);
        return (
          <p key={i}>
            {parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : part))}
          </p>
        );
      }
      return <p key={i}>{block}</p>;
    });
  };

  const contentBefore = paragraphs.slice(0, insertIndex + 1);
  const contentAfter = paragraphs.slice(insertIndex + 1);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        publishedTime={post.date}
        author={post.author}
        jsonLd={jsonLd}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: post.category, href: `/kategori/${post.category.toLowerCase()}` },
            { label: post.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            {/* Hero */}
            <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <CategoryBadge category={post.category} className="mb-3" />

            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} menit baca</span>
            </div>

            {/* Article Content */}
            <div className="article-content">
              {renderContent(contentBefore.join("\n\n"))}
              <BacaJuga posts={bacaJugaPosts} />
              {renderContent(contentAfter.join("\n\n"))}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={related} />
          </article>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* FAQ JSON-LD */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
};

export default ArticlePage;
