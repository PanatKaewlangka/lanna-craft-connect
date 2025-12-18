import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, CalendarDays, User, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "หน้าแรก", labelEn: "Home" },
  { href: "/workshops", label: "เวิร์กช็อป", labelEn: "Workshops", icon: CalendarDays },
  { href: "/map", label: "แผนที่", labelEn: "Map", icon: MapPin },
  { href: "/about", label: "เกี่ยวกับเรา", labelEn: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphism navbar */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-soft">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight text-foreground">
                  โหล่งฮิมคาว
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Long Him Kow
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </span>
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">
                  <User className="h-4 w-4" />
                  เข้าสู่ระบบ
                </Link>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <Link to="/workshops">
                  จองกิจกรรม
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
            isOpen ? "max-h-96" : "max-h-0 border-t-0"
          )}
        >
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
                <span className="text-xs text-muted-foreground">
                  {link.labelEn}
                </span>
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <User className="h-4 w-4" />
                  เข้าสู่ระบบ
                </Link>
              </Button>
              <Button variant="secondary" size="sm" className="flex-1" asChild>
                <Link to="/workshops" onClick={() => setIsOpen(false)}>
                  จองกิจกรรม
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
