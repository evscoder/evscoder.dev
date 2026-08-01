import cn from "clsx";
import { useSiteContext } from "@/app/components/layout/site-provider";

export function Background() {
    const { isThemeAlt } = useSiteContext();

  return (
    <>
      <div
        className={cn(
          "pointer-events-none fixed inset-0",
          isThemeAlt
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(100,116,139,0.16),transparent_34%)]"
            : "bg-[var(--hero-bg-glow)]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none fixed inset-0 [background-size:48px_48px]",
          isThemeAlt
            ? "opacity-30 [background-image:linear-gradient(rgba(148,163,184,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.13)_1px,transparent_1px)]"
            : "opacity-[var(--hero-grid-opacity)] [background-image:linear-gradient(var(--hero-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid-line)_1px,transparent_1px)]",
        )}
      />
    </>
  );
}
