import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown, Github, Lock, Users, Newspaper, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { label: "Home", href: "/", icon: null },
  { label: "About", href: "/trust-center", icon: null },
  { label: "Leadership", href: "/resources", icon: Users },
  { label: "Services", href: "/solutions", icon: null, hasDropdown: true },
  { label: "Community", href: "/blog", icon: null },
  { label: "News & Newsletter", href: "/blog", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Access", href: "/dashboard", icon: Lock },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-2 border-b border-border/50" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Shield className="w-5 h-5 text-primary transition-all duration-300 group-hover:scale-110" />
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient-primary">GEM</span>
            <span className="text-foreground/80 ml-1 hidden sm:inline">ENTERPRISE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center gap-1",
                isActive(link.href) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Access
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button variant="hero" size="sm" asChild>
              <Link to="/login" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Login with GitHub
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden glass-panel mt-2 mx-4 rounded-xl p-4 animate-scale-in border border-border/50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2",
                  isActive(link.href)
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-2 flex flex-col gap-2">
              {user ? (
                <>
                  <Button variant="ghost" className="justify-start" asChild>
                    <Link to="/dashboard" onClick={() => setIsMobileOpen(false)}>
                      <Lock className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={() => { signOut(); setIsMobileOpen(false); }}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button variant="hero" asChild>
                  <Link to="/login" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Login with GitHub
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
