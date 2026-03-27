import { useState } from "react";
import { Link } from "react-router-dom";
import { posts, categories } from "@/data/posts";

const ForYouSection = () => {
  const [activeTab, setActiveTab] = useState("Newest");

  const tabs = ["Newest", ...categories.map((c) => c.name)];

  const filtered =
    activeTab === "Newest"
      ? posts
      : posts.filter((p) => p.category === activeTab);

  return (
    <section className="py-6">
      <div className="duid-container mb-4">
        <h2 className="text-2xl font-bold">For you</h2>
      </div>

      <div className="duid-container flex gap-2 overflow-x-auto scrollbar-hide mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`duid-label-tab whitespace-nowrap ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="duid-container space-y-4">
        {filtered.map((post) => (
          <Link
            key={post.id}
            to={`/${post.slug}`}
            className="duid-card flex gap-4 p-3 animate-fade-in"
          >
            <div className="w-28 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-foreground">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-primary font-medium">{post.category.toLowerCase()}</span>
                <span>·</span>
                <span>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ForYouSection;
