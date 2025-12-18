import { Link } from "react-router-dom";
import { MapPin, Store, Phone, Clock, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with Supabase data
const shops = [
  { id: 1, name: "บ้านคราม", category: "ผ้าย้อมคราม", x: 25, y: 35, description: "ร้านย้อมครามด้วยสีธรรมชาติ 100%" },
  { id: 2, name: "เรือนดิน", category: "เซรามิค", x: 45, y: 50, description: "งานปั้นเซรามิคด้วยดินท้องถิ่น" },
  { id: 3, name: "ครัวแม่ศรี", category: "อาหาร", x: 65, y: 30, description: "อาหารล้านนาแท้ๆ" },
  { id: 4, name: "สวนผึ้ง", category: "น้ำผึ้ง", x: 75, y: 65, description: "น้ำผึ้งจากฟาร์มผึ้งในชุมชน" },
  { id: 5, name: "บ้านกระดาษสา", category: "งานกระดาษ", x: 35, y: 70, description: "กระดาษสาทำมือ" },
  { id: 6, name: "สวนสีเขียว", category: "ผ้าและสิ่งทอ", x: 55, y: 45, description: "Eco-printing และผ้าย้อมธรรมชาติ" },
  { id: 7, name: "บ้านขนมยาย", category: "อาหาร", x: 40, y: 25, description: "ขนมไทยโบราณ" },
  { id: 8, name: "ร้านกาแฟริมคาว", category: "เครื่องดื่ม", x: 60, y: 75, description: "กาแฟคั่วมือ บรรยากาศริมน้ำ" },
];

const Map = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-card py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <MapPin className="h-4 w-4" />
                แผนที่ชุมชน
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                สำรวจโหล่งฮิมคาว
              </h1>
              <p className="text-muted-foreground">
                แผนที่แบบอินเทอร์แอคทีฟ แสดงตำแหน่งร้านค้าและจุดที่น่าสนใจในชุมชน
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
                  {/* Map Background */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-accent/20 via-muted to-earth-cream">
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
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      <path
                        d="M0,62 Q20,57 30,67 T60,57 T100,62"
                        fill="none"
                        stroke="hsl(200, 60%, 75%)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.4"
                      />
                    </svg>

                    {/* Trees decoration */}
                    <div className="absolute left-[10%] top-[15%] text-accent/50 text-5xl">🌳</div>
                    <div className="absolute left-[88%] top-[35%] text-accent/50 text-4xl">🌴</div>
                    <div className="absolute left-[52%] top-[85%] text-accent/50 text-4xl">🌲</div>
                    <div className="absolute left-[15%] top-[60%] text-accent/40 text-3xl">🌳</div>
                    <div className="absolute left-[80%] top-[80%] text-accent/40 text-3xl">🌴</div>

                    {/* River label */}
                    <div className="absolute left-[5%] top-[55%] text-xs text-blue-500/70 font-medium -rotate-12">
                      แม่น้ำคาว
                    </div>

                    {/* Shop Pins */}
                    {shops.map((shop) => (
                      <div
                        key={shop.id}
                        className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                        style={{ left: `${shop.x}%`, top: `${shop.y}%` }}
                      >
                        <div className="relative">
                          {/* Pin */}
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-elevated transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                            <Store className="h-6 w-6" />
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 w-48 rounded-xl bg-foreground p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                            <p className="font-semibold text-background">{shop.name}</p>
                            <p className="text-xs text-background/70 mt-1">{shop.description}</p>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {shop.category}
                            </Badge>
                            {/* Arrow */}
                            <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-foreground" />
                          </div>

                          {/* Pulse effect */}
                          <div className="absolute inset-0 animate-ping rounded-full bg-secondary/30" style={{ animationDuration: "2s" }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 p-3 backdrop-blur-sm text-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="h-4 w-4 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">ร้านค้า/เวิร์กช็อป</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-6 rounded bg-blue-400/50" />
                      <span className="text-muted-foreground">แม่น้ำคาว</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop List */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">
                  ร้านค้าในชุมชน ({shops.length})
                </h2>
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                  {shops.map((shop, index) => (
                    <div
                      key={shop.id}
                      className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-soft hover:border-primary/30 cursor-pointer animate-slide-up opacity-0"
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{shop.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {shop.description}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {shop.category}
                          </Badge>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Store className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-6 text-center">
              <p className="text-muted-foreground">
                💡 <span className="font-medium">หมายเหตุ:</span> แผนที่นี้เป็นแผนที่จำลอง 
                ในเวอร์ชันจริงจะเป็นแผนที่ภาพประกอบของชุมชนที่สวยงาม
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Map;
