import { Link } from "react-router-dom";
import { Store, Clock, Phone, MapPin, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

interface Shop {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  x: number;
  y: number;
  openHours: string;
  phone: string;
  address: string;
  addressEn: string;
  highlights: string[];
  highlightsEn: string[];
}

interface ShopDetailSheetProps {
  shop: Shop | null;
  open: boolean;
  onClose: () => void;
}

export function ShopDetailSheet({ shop, open, onClose }: ShopDetailSheetProps) {
  const { t, language } = useLanguage();

  if (!shop) return null;

  const name = language === "th" ? shop.name : shop.nameEn;
  const category = language === "th" ? shop.category : shop.categoryEn;
  const description = language === "th" ? shop.description : shop.descriptionEn;
  const address = language === "th" ? shop.address : shop.addressEn;
  const highlights = language === "th" ? shop.highlights : shop.highlightsEn;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <div>
              <SheetTitle className="text-xl">{name}</SheetTitle>
              <Badge variant="secondary" className="mt-1">
                {category}
              </Badge>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-semibold mb-3">
              {language === "th" ? "ไฮไลท์" : "Highlights"}
            </h3>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-4">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t("openHours")}</p>
                <p className="font-medium">{shop.openHours}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-4">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{t("contact")}</p>
                <p className="font-medium">{shop.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-4">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">
                  {language === "th" ? "ที่อยู่" : "Address"}
                </p>
                <p className="font-medium text-sm">{address}</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Button asChild>
              <Link to="/workshops">
                {t("viewWorkshops")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" onClick={onClose}>
              {t("close")}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
