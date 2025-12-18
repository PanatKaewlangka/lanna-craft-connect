import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-16 texture-overlay">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              พร้อมเริ่มประสบการณ์ใหม่?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              จองเวิร์กช็อปวันนี้ แล้วมาสัมผัสวิถี Slow Life ที่โหล่งฮิมคาว
              <br className="hidden md:block" />
              รับประกันประสบการณ์ที่คุณจะไม่มีวันลืม
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/workshops">
                  <Calendar className="h-5 w-5" />
                  จองเวิร์กช็อป
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">
                  เรียนรู้เพิ่มเติม
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
