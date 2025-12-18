import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, X, SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WorkshopCard } from "@/components/workshops/WorkshopCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with Supabase data
const allWorkshops = [
  {
    id: "1",
    title: "ย้อมผ้าครามธรรมชาติ",
    titleEn: "Natural Indigo Dyeing",
    description: "เรียนรู้กระบวนการย้อมครามแบบดั้งเดิม ตั้งแต่การเตรียมหม้อคราม จนถึงการมัดย้อมลวดลายต่างๆ",
    price: 800,
    duration: 180,
    capacity: 8,
    category: "ผ้าและสิ่งทอ",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    shopName: "บ้านคราม",
    rating: 4.9,
    reviewCount: 45,
  },
  {
    id: "2",
    title: "ปั้นเซรามิคด้วยดินท้องถิ่น",
    titleEn: "Local Clay Pottery",
    description: "สร้างสรรค์งานปั้นด้วยดินจากชุมชน เรียนรู้เทคนิคขึ้นรูปและตกแต่งลวดลายล้านนา",
    price: 650,
    duration: 150,
    capacity: 6,
    category: "เซรามิค",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80",
    shopName: "เรือนดิน",
    rating: 4.8,
    reviewCount: 32,
  },
  {
    id: "3",
    title: "ทำอาหารล้านนา",
    titleEn: "Lanna Cooking Class",
    description: "เรียนทำอาหารเหนือแท้ๆ กับคุณแม่ในชุมชน ตั้งแต่เลือกซื้อวัตถุดิบจนถึงปรุงอาหาร",
    price: 750,
    duration: 180,
    capacity: 10,
    category: "อาหาร",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
    shopName: "ครัวแม่ศรี",
    rating: 5.0,
    reviewCount: 67,
  },
  {
    id: "4",
    title: "Eco-Printing บนผ้า",
    titleEn: "Eco-Print on Fabric",
    description: "พิมพ์ลายใบไม้และดอกไม้ลงบนผ้าด้วยเทคนิค Eco-printing ที่เป็นมิตรกับธรรมชาติ",
    price: 900,
    duration: 240,
    capacity: 6,
    category: "ผ้าและสิ่งทอ",
    imageUrl: "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=800&auto=format&fit=crop&q=80",
    shopName: "สวนสีเขียว",
    rating: 4.7,
    reviewCount: 28,
  },
  {
    id: "5",
    title: "ทำกระดาษสาจากใบสับปะรด",
    titleEn: "Pineapple Fiber Paper",
    description: "เรียนรู้การทำกระดาษสาจากเส้นใยธรรมชาติ พร้อมตกแต่งดอกไม้แห้ง",
    price: 550,
    duration: 120,
    capacity: 8,
    category: "งานกระดาษ",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&auto=format&fit=crop&q=80",
    shopName: "บ้านกระดาษสา",
    rating: 4.6,
    reviewCount: 19,
  },
  {
    id: "6",
    title: "เรียนทำขนมไทยโบราณ",
    titleEn: "Traditional Thai Desserts",
    description: "ลงมือทำขนมไทยโบราณ ขนมชั้น ทองหยิบ ฝอยทอง พร้อมเคล็ดลับจากคุณยาย",
    price: 600,
    duration: 150,
    capacity: 8,
    category: "อาหาร",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80",
    shopName: "บ้านขนมยาย",
    rating: 4.9,
    reviewCount: 54,
  },
];

const categories = ["ทั้งหมด", "ผ้าและสิ่งทอ", "เซรามิค", "อาหาร", "งานกระดาษ"];
const priceRanges = [
  { label: "ทั้งหมด", min: 0, max: Infinity },
  { label: "ต่ำกว่า ฿500", min: 0, max: 500 },
  { label: "฿500 - ฿800", min: 500, max: 800 },
  { label: "฿800 ขึ้นไป", min: 800, max: Infinity },
];

const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredWorkshops = allWorkshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.shopName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "ทั้งหมด" || workshop.category === selectedCategory;

    const matchesPrice =
      workshop.price >= selectedPriceRange.min &&
      workshop.price <= selectedPriceRange.max;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ทั้งหมด");
    setSelectedPriceRange(priceRanges[0]);
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "ทั้งหมด" || selectedPriceRange !== priceRanges[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-card py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                เวิร์กช็อปทั้งหมด
              </h1>
              <p className="text-muted-foreground">
                ค้นหากิจกรรมที่คุณสนใจ จากช่างฝีมือท้องถิ่นในชุมชนโหล่งฮิมคาว
              </p>
            </div>

            {/* Search & Filter */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ค้นหาเวิร์กช็อป..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 pr-4"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Results */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden w-64 shrink-0 lg:block">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold">หมวดหมู่</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">ช่วงราคา</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => setSelectedPriceRange(range)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            selectedPriceRange === range
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="w-full"
                    >
                      <X className="h-4 w-4" />
                      ล้างตัวกรอง
                    </Button>
                  )}
                </div>
              </aside>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="rounded-xl border border-border bg-card p-4 lg:hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">ตัวกรอง</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-medium">หมวดหมู่</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Badge
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">ช่วงราคา</h4>
                      <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range) => (
                          <Badge
                            key={range.label}
                            variant={selectedPriceRange === range ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedPriceRange(range)}
                          >
                            {range.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="flex-1">
                {/* Results Header */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    พบ {filteredWorkshops.length} กิจกรรม
                  </p>
                  {hasActiveFilters && (
                    <div className="hidden items-center gap-2 md:flex">
                      {selectedCategory !== "ทั้งหมด" && (
                        <Badge variant="secondary">
                          {selectedCategory}
                          <button
                            onClick={() => setSelectedCategory("ทั้งหมด")}
                            className="ml-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                      {selectedPriceRange !== priceRanges[0] && (
                        <Badge variant="secondary">
                          {selectedPriceRange.label}
                          <button
                            onClick={() => setSelectedPriceRange(priceRanges[0])}
                            className="ml-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                {/* Workshop Grid */}
                {filteredWorkshops.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredWorkshops.map((workshop, index) => (
                      <div
                        key={workshop.id}
                        className="animate-slide-up opacity-0"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <WorkshopCard workshop={workshop} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border py-16 text-center">
                    <p className="text-muted-foreground">
                      ไม่พบกิจกรรมที่ตรงกับการค้นหา
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="mt-4"
                    >
                      ล้างตัวกรองทั้งหมด
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
