import cn from "clsx";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function Background() {
  const { isThemeAlt } = useSiteContext();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "portfolio-background pointer-events-none fixed inset-0 overflow-hidden",
        isThemeAlt ? "portfolio-background--dark" : "portfolio-background--light",
      )}
    >
      <div className="portfolio-background__mesh absolute inset-0" />
      <div className="portfolio-background__grid absolute inset-0" />
      <div className="portfolio-background__beam absolute inset-0" />
      <div className="portfolio-background__orb portfolio-background__orb--one absolute rounded-full" />
      <div className="portfolio-background__orb portfolio-background__orb--two absolute rounded-full" />
      <div className="portfolio-background__orb portfolio-background__orb--three absolute rounded-full" />
      <div className="portfolio-background__vignette absolute inset-0" />
    </div>
  );
}
