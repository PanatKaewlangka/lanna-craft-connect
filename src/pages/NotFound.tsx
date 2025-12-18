import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 inline-flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-elevated">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        {/* Error */}
        <div className="mb-2 text-8xl font-bold text-primary/20">404</div>
        <h1 className="mb-4 text-2xl font-bold">ไม่พบหน้าที่ต้องการ</h1>
        <p className="mb-8 text-muted-foreground">
          ขออภัย หน้าที่คุณกำลังค้นหาไม่มีอยู่หรือถูกย้ายไปแล้ว
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="default" size="lg" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
              กลับหน้าแรก
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" />
            ย้อนกลับ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
