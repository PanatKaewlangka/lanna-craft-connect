import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/3 h-24 w-24 rounded-full bg-primary-foreground/10 blur-2xl animate-float delay-500" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              ชุมชนท่องเที่ยวเชิงนิเวศ เชียงใหม่
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground text-balance animate-slide-up md:text-5xl lg:text-6xl xl:text-7xl">
            สัมผัสวิถี
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Slow Life</span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-secondary/40 -rotate-1" />
            </span>
            <br />
            ที่โหล่งฮิมคาว
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 animate-slide-up delay-100 md:text-xl">
            เรียนรู้งานหัตถกรรมพื้นบ้าน ย้อมผ้าครามธรรมชาติ ปั้นดิน ทำอาหารล้านนา
            <br className="hidden md:block" />
            กับช่างฝีมือในชุมชนริมแม่น้ำคาว สันกำแพง
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 animate-slide-up delay-200 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/workshops">
                <Calendar className="h-5 w-5" />
                ดูเวิร์กช็อปทั้งหมด
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/map">
                <MapPin className="h-5 w-5" />
                สำรวจแผนที่ชุมชน
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 animate-fade-in delay-300 md:gap-8">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-sm md:p-6">
              <div className="text-3xl font-bold text-secondary md:text-4xl">15+</div>
              <div className="mt-1 text-sm text-primary-foreground/70">เวิร์กช็อป</div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-sm md:p-6">
              <div className="text-3xl font-bold text-secondary md:text-4xl">20+</div>
              <div className="mt-1 text-sm text-primary-foreground/70">ร้านค้าในชุมชน</div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-sm md:p-6">
              <div className="text-3xl font-bold text-secondary md:text-4xl">100%</div>
              <div className="mt-1 text-sm text-primary-foreground/70">Eco-friendly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
