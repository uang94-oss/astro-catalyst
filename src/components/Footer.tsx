import { Link } from "react-router-dom";
import { categories } from "@/data/posts";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-extrabold">D</span>
            </div>
            <span className="text-lg font-extrabold text-foreground">
              Duid<span className="text-primary">Pro</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Platform edukasi keuangan, teknologi, SEO, dan blogging untuk membantu kamu meraih kebebasan finansial dan digital.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Kategori</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/kategori/${cat.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Halaman</h3>
          <ul className="space-y-2">
            <li><Link to="/tentang" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
            <li><Link to="/kontak" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
            <li><Link to="/kebijakan-privasi" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
            <li><Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DuidPro. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
