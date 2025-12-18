import { useState } from "react";
import { MapPin, Store } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ShopDetailSheet } from "@/components/map/ShopDetailSheet";
import { useLanguage } from "@/contexts/LanguageContext";

// Extended mock data with full details
const shops = [
  { 
    id: 1, 
    name: "บ้านคราม", 
    nameEn: "Kram House",
    category: "ผ้าย้อมคราม", 
    categoryEn: "Indigo Dye",
    x: 25, 
    y: 35, 
    description: "ร้านย้อมครามด้วยสีธรรมชาติ 100% สืบทอดภูมิปัญญาการย้อมครามแบบดั้งเดิมจากบรรพบุรุษมากว่า 3 รุ่น ทุกผลิตภัณฑ์ทำมือทุกขั้นตอน",
    descriptionEn: "100% natural indigo dye shop, preserving traditional dyeing wisdom passed down for over 3 generations. Every product is handmade in all stages.",
    openHours: "09:00 - 17:00",
    phone: "081-234-5678",
    address: "123 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "123 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["ย้อมครามธรรมชาติ 100%", "เวิร์กช็อปย้อมผ้าด้วยมือ", "ผลิตภัณฑ์ผ้าคราม"],
    highlightsEn: ["100% natural indigo dye", "Hands-on fabric dyeing workshop", "Indigo fabric products"]
  },
  { 
    id: 2, 
    name: "เรือนดิน", 
    nameEn: "Din House",
    category: "เซรามิค", 
    categoryEn: "Ceramics",
    x: 45, 
    y: 50, 
    description: "งานปั้นเซรามิคด้วยดินท้องถิ่น ผสมผสานศิลปะล้านนาดั้งเดิมกับดีไซน์ร่วมสมัย",
    descriptionEn: "Ceramic art using local clay, blending traditional Lanna art with contemporary design.",
    openHours: "10:00 - 18:00",
    phone: "082-345-6789",
    address: "45 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "45 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["ปั้นเซรามิคด้วยมือ", "ดินท้องถิ่นคุณภาพ", "ลวดลายล้านนาประยุกต์"],
    highlightsEn: ["Hand-molded ceramics", "Quality local clay", "Applied Lanna patterns"]
  },
  { 
    id: 3, 
    name: "ครัวแม่ศรี", 
    nameEn: "Mae Sri Kitchen",
    category: "อาหาร", 
    categoryEn: "Food",
    x: 65, 
    y: 30, 
    description: "อาหารล้านนาแท้ๆ ปรุงจากสูตรโบราณ ใช้วัตถุดิบสดใหม่จากสวนหลังบ้าน",
    descriptionEn: "Authentic Lanna cuisine cooked from ancient recipes using fresh ingredients from our backyard garden.",
    openHours: "08:00 - 20:00",
    phone: "083-456-7890",
    address: "67 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "67 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["อาหารล้านนาแท้ๆ", "วัตถุดิบออร์แกนิค", "คลาสทำอาหาร"],
    highlightsEn: ["Authentic Lanna food", "Organic ingredients", "Cooking class available"]
  },
  { 
    id: 4, 
    name: "สวนผึ้ง", 
    nameEn: "Bee Garden",
    category: "น้ำผึ้ง", 
    categoryEn: "Honey",
    x: 75, 
    y: 65, 
    description: "น้ำผึ้งจากฟาร์มผึ้งในชุมชน บริสุทธิ์ 100% ไม่ผ่านความร้อน",
    descriptionEn: "Honey from our community bee farm, 100% pure and raw (not heat-treated).",
    openHours: "09:00 - 16:00",
    phone: "084-567-8901",
    address: "89 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "89 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["น้ำผึ้งป่าดอกไม้นานาชนิด", "ชมฟาร์มผึ้ง", "ผลิตภัณฑ์แปรรูปจากน้ำผึ้ง"],
    highlightsEn: ["Multi-flower wild honey", "Farm tour available", "Honey-based products"]
  },
  { 
    id: 5, 
    name: "บ้านกระดาษสา", 
    nameEn: "Sa Paper House",
    category: "งานกระดาษ", 
    categoryEn: "Paper Craft",
    x: 35, 
    y: 70, 
    description: "กระดาษสาทำมือ สืบสานงานหัตถกรรมกระดาษสาล้านนา พร้อมเวิร์กช็อปทำกระดาษ",
    descriptionEn: "Handmade Sa paper, preserving Lanna paper craft traditions with paper-making workshops.",
    openHours: "09:00 - 17:00",
    phone: "085-678-9012",
    address: "35 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "35 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["กระดาษสาทำมือ", "เวิร์กช็อปทำกระดาษ", "ผลิตภัณฑ์กระดาษสา"],
    highlightsEn: ["Handmade Sa paper", "Paper-making workshop", "Sa paper products"]
  },
  { 
    id: 6, 
    name: "สวนสีเขียว", 
    nameEn: "Green Garden",
    category: "ผ้าและสิ่งทอ", 
    categoryEn: "Textiles",
    x: 55, 
    y: 45, 
    description: "Eco-printing และผ้าย้อมธรรมชาติ ใช้ใบไม้และดอกไม้จากสวนในการสร้างลวดลายบนผ้า",
    descriptionEn: "Eco-printing and natural dye textiles, using leaves and flowers from our garden to create patterns on fabric.",
    openHours: "10:00 - 17:00",
    phone: "086-789-0123",
    address: "55 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "55 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["Eco-printing ใบไม้", "ย้อมสีธรรมชาติ", "ผลิตภัณฑ์ผ้าเป็นมิตรกับสิ่งแวดล้อม"],
    highlightsEn: ["Leaf eco-printing", "Natural dyeing", "Eco-friendly fabric products"]
  },
  { 
    id: 7, 
    name: "บ้านขนมยาย", 
    nameEn: "Grandma's Sweets",
    category: "อาหาร", 
    categoryEn: "Food",
    x: 40, 
    y: 25, 
    description: "ขนมไทยโบราณ สูตรดั้งเดิมจากยายที่สืบทอดมา ทำสดใหม่ทุกวัน",
    descriptionEn: "Traditional Thai sweets, authentic recipes passed down from grandma, freshly made daily.",
    openHours: "07:00 - 15:00",
    phone: "087-890-1234",
    address: "40 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "40 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["ขนมไทยโบราณ", "ทำสดใหม่ทุกวัน", "สูตรดั้งเดิม 3 รุ่น"],
    highlightsEn: ["Traditional Thai sweets", "Freshly made daily", "3-generation recipe"]
  },
  { 
    id: 8, 
    name: "ร้านกาแฟริมคาว", 
    nameEn: "Rim Kaw Coffee",
    category: "เครื่องดื่ม", 
    categoryEn: "Drinks",
    x: 60, 
    y: 75, 
    description: "กาแฟคั่วมือ เมล็ดกาแฟจากดอยสูงในเชียงใหม่ บรรยากาศริมน้ำคาว",
    descriptionEn: "Hand-roasted coffee, beans from Chiang Mai highlands, with a scenic riverside atmosphere.",
    openHours: "08:00 - 18:00",
    phone: "088-901-2345",
    address: "60 หมู่ 5 ต.โหล่งฮิมคาว อ.สันป่าตอง จ.เชียงใหม่",
    addressEn: "60 Moo 5, Long Him Kow, San Pa Tong, Chiang Mai",
    highlights: ["กาแฟคั่วมือ", "เมล็ดกาแฟดอยสูง", "วิวริมน้ำ"],
    highlightsEn: ["Hand-roasted coffee", "Highland coffee beans", "Riverside view"]
  },
];

const Map = () => {
  const [selectedShop, setSelectedShop] = useState<typeof shops[0] | null>(null);
  const { t, language } = useLanguage();

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
                {t("communityMap")}
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                {t("exploreLHK")}
              </h1>
              <p className="text-muted-foreground">
                {t("mapDescription")}
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
                      {t("kawRiver")}
                    </div>

                    {/* Shop Pins */}
                    {shops.map((shop) => (
                      <div
                        key={shop.id}
                        className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                        style={{ left: `${shop.x}%`, top: `${shop.y}%` }}
                        onClick={() => setSelectedShop(shop)}
                      >
                        <div className="relative">
                          {/* Pin */}
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-elevated transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                            <Store className="h-6 w-6" />
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 w-48 rounded-xl bg-foreground p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 pointer-events-none">
                            <p className="font-semibold text-background">
                              {language === "th" ? shop.name : shop.nameEn}
                            </p>
                            <p className="text-xs text-background/70 mt-1 line-clamp-2">
                              {language === "th" ? shop.description : shop.descriptionEn}
                            </p>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {language === "th" ? shop.category : shop.categoryEn}
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
                      <span className="text-muted-foreground">{t("shopWorkshop")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-6 rounded bg-blue-400/50" />
                      <span className="text-muted-foreground">{t("kawRiver")}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop List */}
              <div>
                <h2 className="mb-4 text-lg font-semibold">
                  {t("shopsInCommunity")} ({shops.length})
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
                      onClick={() => setSelectedShop(shop)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">
                            {language === "th" ? shop.name : shop.nameEn}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {language === "th" ? shop.description : shop.descriptionEn}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            {language === "th" ? shop.category : shop.categoryEn}
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
                💡 <span className="font-medium">{t("note")}:</span> {t("mapNote")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Shop Detail Sheet */}
      <ShopDetailSheet 
        shop={selectedShop} 
        open={!!selectedShop} 
        onClose={() => setSelectedShop(null)} 
      />
    </div>
  );
};

export default Map;
