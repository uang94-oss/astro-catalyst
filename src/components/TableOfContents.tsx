import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const headings: TOCItem[] = [];
  content.split("\n\n").forEach((block) => {
    if (block.startsWith("## ")) {
      const text = block.replace("## ", "").trim();
      headings.push({ id: text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""), text, level: 2 });
    } else if (block.startsWith("### ")) {
      const text = block.replace("### ", "").trim();
      headings.push({ id: text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""), text, level: 3 });
    }
  });

  if (headings.length === 0) return null;

  return (
    <nav className="my-5 rounded-xl border border-border bg-muted/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-2">
          <List className="w-4 h-4 text-primary" />
          Daftar Isi
        </span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <ul className="px-4 pb-4 space-y-1.5">
          {headings.map((h, i) => (
            <li key={i} className={h.level === 3 ? "ml-4" : ""}>
              <a
                href={`#${h.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default TableOfContents;
