import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-soft">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight">โหล่งฮิมคาว</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Long Him Kow
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ชุมชนหัตถกรรมเชิงนิเวศในสันกำแพง เชียงใหม่ 
              ที่ผสานวิถีชีวิตแบบ Slow Life กับงานคราฟต์ที่เป็นมิตรกับสิ่งแวดล้อม
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">เมนูหลัก</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                เวิร์กช็อปทั้งหมด
              </Link>
              <Link to="/map" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                แผนที่ชุมชน
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                เกี่ยวกับโหล่งฮิมคาว
              </Link>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                เข้าสู่ระบบ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>ต.สันกำแพง อ.สันกำแพง จ.เชียงใหม่ 50130</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span>089-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>info@longhimkow.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">ติดตามเรา</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              พบกับกิจกรรมใหม่ๆ และโปรโมชั่นพิเศษ
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 โหล่งฮิมคาว (Long Him Kow). สงวนลิขสิทธิ์ทุกประการ.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Leaf className="h-3 w-3 text-accent" />
              Eco-friendly Community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
