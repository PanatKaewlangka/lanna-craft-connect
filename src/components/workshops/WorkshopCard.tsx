import { Link } from "react-router-dom";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Workshop {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  price: number;
  duration: number;
  capacity: number;
  category: string;
  imageUrl: string;
  shopName: string;
  rating?: number;
  reviewCount?: number;
}

interface WorkshopCardProps {
  workshop: Workshop;
  className?: string;
}

export function WorkshopCard({ workshop, className }: WorkshopCardProps) {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} นาที`;
    if (mins === 0) return `${hours} ชม.`;
    return `${hours} ชม. ${mins} นาที`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("th-TH").format(price);
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={workshop.imageUrl}
          alt={workshop.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute left-3 top-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {workshop.category}
          </Badge>
        </div>

        {/* Rating */}
        {workshop.rating && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
            <Star className="h-3 w-3 fill-secondary text-secondary" />
            {workshop.rating}
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Shop name */}
        <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {workshop.shopName}
        </div>

        {/* Title */}
        <h3 className="mb-1 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
          {workshop.title}
        </h3>
        {workshop.titleEn && (
          <p className="mb-2 text-xs text-muted-foreground">{workshop.titleEn}</p>
        )}

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {workshop.description}
        </p>

        {/* Meta info */}
        <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {formatDuration(workshop.duration)}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            สูงสุด {workshop.capacity} คน
          </span>
        </div>

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-xl font-bold text-secondary">
              ฿{formatPrice(workshop.price)}
            </span>
            <span className="text-xs text-muted-foreground">/คน</span>
          </div>
          <Button variant="default" size="sm" asChild>
            <Link to={`/workshops/${workshop.id}`}>
              จองเลย
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
