import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowLeft, Leaf, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type AuthMode = "login" | "register";

const Login = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - will be replaced with actual Supabase auth
    setTimeout(() => {
      setIsLoading(false);
      toast.info(
        mode === "login" 
          ? "ระบบยังไม่พร้อมใช้งาน กรุณารอการเชื่อมต่อ Supabase" 
          : "ระบบยังไม่พร้อมใช้งาน กรุณารอการเชื่อมต่อ Supabase"
      );
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Back button */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              กลับหน้าแรก
            </Link>
          </Button>

          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-soft">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">โหล่งฮิมคาว</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Long Him Kow
              </span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl">
              {mode === "login" ? "ยินดีต้อนรับกลับ" : "สมัครสมาชิก"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {mode === "login"
                ? "เข้าสู่ระบบเพื่อจองเวิร์กช็อปและติดตามการจองของคุณ"
                : "สร้างบัญชีเพื่อเริ่มจองกิจกรรมในชุมชนโหล่งฮิมคาว"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="fullName">ชื่อ-นามสกุล</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="กรอกชื่อ-นามสกุล"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-12 pl-10"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">อีเมล</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">รหัสผ่าน</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-10 pr-10"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  ลืมรหัสผ่าน?
                </button>
              </div>
            )}

            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading
                ? "กำลังดำเนินการ..."
                : mode === "login"
                ? "เข้าสู่ระบบ"
                : "สมัครสมาชิก"}
            </Button>
          </form>

          {/* Toggle mode */}
          <div className="mt-6 text-center text-sm">
            {mode === "login" ? (
              <p className="text-muted-foreground">
                ยังไม่มีบัญชี?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="font-medium text-primary hover:underline"
                >
                  สมัครสมาชิก
                </button>
              </p>
            ) : (
              <p className="text-muted-foreground">
                มีบัญชีอยู่แล้ว?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="font-medium text-primary hover:underline"
                >
                  เข้าสู่ระบบ
                </button>
              </p>
            )}
          </div>

          {/* Info note */}
          <div className="mt-8 rounded-xl border border-border bg-muted/50 p-4 text-center text-sm text-muted-foreground">
            <p>
              💡 ระบบ Authentication จะพร้อมใช้งานหลังเชื่อมต่อกับ Supabase
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="relative h-full hero-gradient">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl animate-float delay-300" />
          </div>

          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center p-12">
            <div className="max-w-md text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
                สัมผัสวิถี Slow Life
              </h2>
              <p className="text-primary-foreground/80">
                เข้าร่วมกิจกรรมเวิร์กช็อปกับช่างฝีมือท้องถิ่น
                <br />
                ที่ชุมชนโหล่งฮิมคาว เชียงใหม่
              </p>

              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-xs text-primary-foreground/70">เวิร์กช็อป</div>
                </div>
                <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-secondary">20+</div>
                  <div className="text-xs text-primary-foreground/70">ร้านค้า</div>
                </div>
                <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-primary-foreground/70">Eco</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
