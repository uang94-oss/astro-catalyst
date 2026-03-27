import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  Keuangan: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  SEO: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  AI: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  Blogging: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Teknologi: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "default";
  className?: string;
}

const CategoryBadge = ({ category, size = "default", className }: CategoryBadgeProps) => (
  <span
    className={cn(
      "category-badge",
      colorMap[category] || "bg-muted text-muted-foreground",
      size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-0.5",
      className
    )}
  >
    {category}
  </span>
);

export default CategoryBadge;
