import { Link } from "react-router-dom";
import { Leaf, Heart, Users, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Leaf,
    title: "เป็นมิตรกับสิ่งแวดล้อม",
    description: "ทุกกิจกรรมใช้วัตถุดิบธรรมชาติ ปลอดสารเคมี",
  },
  {
    icon: Heart,
    title: "สืบสานวัฒนธรรม",
    description: "เรียนรู้จากช่างฝีมือท้องถิ่นที่สืบทอดมาหลายชั่วอายุ",
  },
  {
    icon: Users,
    title: "ชุมชนเข้มแข็ง",
    description: "รายได้ 100% กลับสู่ผู้ประกอบการในชุมชน",
  },
  {
    icon: Sun,
    title: "Slow Life",
    description: "หยุดพัก ผ่อนคลาย และใช้เวลากับสิ่งที่ตัวเองรัก",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Leaf className="h-4 w-4" />
              เกี่ยวกับชุมชน
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              โหล่งฮิมคาว
              <br />
              <span className="text-primary/70">ชุมชนแห่งความสุข</span>
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              "โหล่งฮิมคาว" คือชุมชนเล็กๆ ริมแม่น้ำคาว ในอำเภอสันกำแพง จังหวัดเชียงใหม่ 
              ที่รวมตัวกันของกลุ่มช่างฝีมือและศิลปินที่รักในงานหัตถกรรม 
              เราเชื่อว่าการท่องเที่ยวที่แท้จริงคือการได้ "สัมผัส" และ "เรียนรู้" 
              ไม่ใช่แค่การมาถ่ายรูปแล้วกลับไป
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              ที่นี่คุณจะได้พบกับงานคราฟต์หลากหลาย ตั้งแต่การย้อมผ้าด้วยสีธรรมชาติ 
              การปั้นดินเผา การทำอาหารพื้นเมือง ไปจนถึงการเรียนรู้วิถีเกษตรอินทรีย์ 
              ทุกกิจกรรมถูกออกแบบมาเพื่อให้คุณได้ใช้เวลาอย่างมีความหมาย
            </p>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                อ่านเรื่องราวของเรา
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
