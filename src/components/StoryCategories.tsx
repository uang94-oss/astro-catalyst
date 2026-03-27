import { Link } from "react-router-dom";
import { categories } from "@/data/posts";

// Map categories to images (using post images as category thumbnails)
const categoryImages: Record<string, string> = {
  keuangan: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=60",
  seo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=200&q=60",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&q=60",
  blogging: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&q=60",
  teknologi: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=60",
};

const categoryLabels: Record<string, string> = {
  keuangan: "Finance",
  seo: "SEO",
  ai: "AI News",
  blogging: "Blog",
  teknologi: "Tech",
};

const StoryCategories = () => (
  <div className="py-4">
    <div className="flex justify-center gap-6 mx-auto max-w-2xl px-4 overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/kategori/${cat.slug}`}
          className="flex flex-col items-center gap-1.5 flex-shrink-0"
        >
          <div className="duid-story-ring">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-card">
              <img
                src={categoryImages[cat.slug] || ""}
                alt={cat.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {categoryLabels[cat.slug] || cat.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default StoryCategories;
