import { useSiteContext } from "@/app/components/layout/site-provider";
import cn from "clsx";
import { ReactNode } from "react";

type PanelProps = {
    children: ReactNode;
    className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
    const { isThemeAlt } = useSiteContext();

    return (
        <div
            className={cn(
                "relative rounded-2xl",
                isThemeAlt
                    ? "border border-slate-600/40 bg-slate-950/70 shadow-2xl shadow-black/40"
                    : "border border-(--hero-panel-border) bg-(--hero-panel-bg) shadow-[0_24px_80px_var(--hero-shadow)]",
                className,
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-[inherit]",
                    isThemeAlt
                        ? "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_34%)]"
                        : "bg-(--hero-panel-overlay)",
                )}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
