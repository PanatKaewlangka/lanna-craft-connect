import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleShops = [
  { id: 1, name: "บ้านคราม", category: "ผ้าย้อมคราม", x: 25, y: 35 },
  { id: 2, name: "เรือนดิน", category: "เซรามิค", x: 45, y: 50 },
  { id: 3, name: "ครัวแม่ศรี", category: "อาหาร", x: 65, y: 30 },
  { id: 4, name: "สวนผึ้ง", category: "น้ำผึ้ง", x: 75, y: 65 },
  { id: 5, name: "บ้านกระดาษสา", category: "กระดาษสา", x: 35, y: 70 },
];

export function MapPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <MapPin className="h-4 w-4" />
            แผนที่ชุมชน
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            สำรวจร้านค้าในชุมชน
          </h2>
          <p className="text-muted-foreground">
            พบกับร้านค้าและเวิร์กช็อปกว่า 20 แห่ง กระจายอยู่ทั่วชุมชนริมแม่น้ำคาว
          </p>
        </div>

        {/* Interactive Map Preview */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          {/* Map Background - Illustrated style */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-accent/20 via-muted to-earth-cream">
            {/* Decorative river */}
            <svg 
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 Q20,55 30,65 T60,55 T100,60"
                fill="none"
                stroke="hsl(200, 60%, 70%)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M0,62 Q20,57 30,67 T60,57 T100,62"
                fill="none"
                stroke="hsl(200, 60%, 75%)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>

            {/* Trees decoration */}
            <div className="absolute left-[10%] top-[20%] text-accent/40 text-4xl">🌳</div>
            <div className="absolute left-[85%] top-[40%] text-accent/40 text-3xl">🌴</div>
            <div className="absolute left-[55%] top-[80%] text-accent/40 text-3xl">🌲</div>

            {/* Shop Pins */}
            {sampleShops.map((shop) => (
              <div
                key={shop.id}
                className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                style={{ left: `${shop.x}%`, top: `${shop.y}%` }}
              >
                <div className="relative">
                  {/* Pin */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-elevated transition-transform duration-300 group-hover:scale-110">
                    <Store className="h-5 w-5" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-xs text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                    <p className="font-semibold">{shop.name}</p>
                    <p className="text-background/70">{shop.category}</p>
                    {/* Arrow */}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>

                  {/* Pulse effect */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-secondary/30" />
                </div>
              </div>
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/90 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">พร้อมออกสำรวจ?</p>
                <p className="text-sm text-muted-foreground">
                  ดูแผนที่แบบเต็มพร้อมรายละเอียดร้านค้า
                </p>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/map">
                  เปิดแผนที่
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
