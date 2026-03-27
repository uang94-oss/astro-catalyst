import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Moon, Sun, User } from "lucide-react";
import { categories } from "@/data/posts";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border h-14">
        <div className="duid-container h-full flex items-center justify-between">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-lg font-extrabold text-foreground tracking-tight">
                duidpro
              </span>
              <span className="text-lg font-normal text-muted-foreground">.com</span>
            </Link>
          </div>

          {/* Right: search, dark, user */}
          <div className="flex items-center gap-1">
            <Link to="/cari" className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <nav className="fixed top-14 left-0 bottom-0 w-72 bg-card border-r border-border p-4 space-y-1" onClick={(e) => e.stopPropagation()}>
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-muted">
              Beranda
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">
              Contact
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3">Kategori</div>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/kategori/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
