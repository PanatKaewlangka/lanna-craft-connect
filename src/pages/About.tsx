import { Link } from "react-router-dom";
import { Leaf, Heart, Users, Sun, Mountain, Droplets, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Leaf,
    title: "Eco-friendly",
    description: "ทุกกิจกรรมใช้วัตถุดิบธรรมชาติ ปลอดสารเคมี ไม่ทำลายสิ่งแวดล้อม",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "งานทุกชิ้นทำด้วยมือ ด้วยใจรัก และความตั้งใจจากช่างฝีมือท้องถิ่น",
  },
  {
    icon: Users,
    title: "Community First",
    description: "รายได้ทั้งหมดกลับสู่ชุมชน สร้างเศรษฐกิจที่ยั่งยืนให้กับคนในพื้นที่",
  },
  {
    icon: Sun,
    title: "Slow Life Philosophy",
    description: "เชื่อในการใช้ชีวิตอย่างช้าๆ มีสติ และเห็นคุณค่าของทุกช่วงเวลา",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                เรื่องราวของ
                <br />
                <span className="text-secondary">โหล่งฮิมคาว</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 md:text-xl">
                ชุมชนเล็กๆ ที่ยิ่งใหญ่ด้วยหัวใจที่รักในงานคราฟต์
                <br />
                และการใช้ชีวิตอย่างมีความหมาย
              </p>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 text-center md:text-3xl">
                  จุดเริ่มต้นจากความรัก
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "โหล่งฮิมคาว" เป็นคำในภาษาเหนือ แปลว่า "พื้นที่ริมแม่น้ำคาว" 
                  เราคือชุมชนของกลุ่มช่างฝีมือและศิลปินที่รวมตัวกันด้วยความรักในงานหัตถกรรมพื้นบ้าน 
                  และความต้องการที่จะสืบสานภูมิปัญญาท้องถิ่นให้คงอยู่
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  ตั้งอยู่ในอำเภอสันกำแพง จังหวัดเชียงใหม่ ชุมชนของเรามีประวัติยาวนานในการทำงานหัตถกรรม 
                  ตั้งแต่การย้อมผ้าด้วยสีธรรมชาติจากใบครามและเปลือกไม้ 
                  การปั้นดินเผาจากดินท้องถิ่น ไปจนถึงการทำกระดาษสาจากเยื่อพืช
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  เราเชื่อว่าการท่องเที่ยวที่แท้จริง ไม่ใช่แค่การมาถ่ายรูปแล้วกลับไป 
                  แต่คือการได้ "สัมผัส" และ "เรียนรู้" วิถีชีวิตของผู้คนในพื้นที่ 
                  ได้ลงมือทำด้วยตัวเอง และนำประสบการณ์เหล่านั้นกลับไปพร้อมกับความทรงจำที่ล้ำค่า
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 warm-gradient">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                คุณค่าที่เรายึดมั่น
              </h2>
              <p className="text-muted-foreground">
                หลักการที่หล่อหลอมทุกสิ่งที่เราทำ
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-slide-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
                  <Mountain className="h-4 w-4" />
                  ที่ตั้งของเรา
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  สันกำแพง, เชียงใหม่
                </h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  ห่างจากตัวเมืองเชียงใหม่เพียง 13 กิโลเมตร 
                  แต่บรรยากาศเงียบสงบ ล้อมรอบด้วยทุ่งนาและสวนผลไม้ 
                  เหมาะสำหรับการพักผ่อนและเรียนรู้วิถีชีวิตแบบ Slow Life
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Droplets className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">ริมแม่น้ำคาว บรรยากาศร่มรื่น</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mountain className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">วิวภูเขาดอยสุเทพเป็นฉากหลัง</span>
                  </div>
                </div>

                <Button variant="secondary" size="lg" asChild>
                  <Link to="/map">
                    ดูแผนที่ชุมชน
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80"
                    alt="สันกำแพง เชียงใหม่"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-3xl bg-secondary/20 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-16 texture-overlay">
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                  พร้อมมาเยือนหรือยัง?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/80">
                  มาสัมผัสประสบการณ์ที่ไม่เหมือนใคร กับชุมชนโหล่งฮิมคาว
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/workshops">
                      ดูเวิร์กช็อปทั้งหมด
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
