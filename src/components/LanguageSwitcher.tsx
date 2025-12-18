import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-full border border-border bg-muted/50 p-0.5">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-6 rounded-full px-2 text-xs font-medium transition-all",
            language === "th"
              ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
              : "text-muted-foreground hover:bg-transparent hover:text-foreground"
          )}
          onClick={() => setLanguage("th")}
        >
          TH
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-6 rounded-full px-2 text-xs font-medium transition-all",
            language === "en"
              ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
              : "text-muted-foreground hover:bg-transparent hover:text-foreground"
          )}
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
      </div>
    </div>
  );
}
