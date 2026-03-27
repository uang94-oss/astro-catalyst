import { Link } from "react-router-dom";
import { categories } from "@/data/posts";

const footerPages = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/disclaimer", label: "Disclaimer" },
  { path: "/sitemap", label: "Sitemap" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="duid-container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">gratkapl.com</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blog teknologi modern yang membahas AI, programming, web design, dan SEO.
            </p>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Kategori</h4>
            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/kategori/${cat.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Halaman */}
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Halaman</h4>
            <ul className="space-y-1.5">
              {footerPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} gratkapl.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
