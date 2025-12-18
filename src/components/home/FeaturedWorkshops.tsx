import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkshopCard } from "@/components/workshops/WorkshopCard";

// Mock data - will be replaced with Supabase data
const featuredWorkshops = [
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
];

export function FeaturedWorkshops() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
            <Sparkles className="h-4 w-4" />
            กิจกรรมแนะนำ
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            เวิร์กช็อปยอดนิยม
          </h2>
          <p className="text-muted-foreground">
            สัมผัสประสบการณ์การเรียนรู้ที่ไม่เหมือนใคร กับช่างฝีมือท้องถิ่นผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Workshop Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWorkshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <WorkshopCard workshop={workshop} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/workshops">
              ดูเวิร์กช็อปทั้งหมด
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
