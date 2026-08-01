import cn from "clsx";
import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: string;
  width?: number | string;
  height?: number | string;
};

export function Icon({
  name,
  width,
  height = width ?? width,
  className,
  ...props
}: IconProps) {
  const href = `/img/symbols.svg#${name}`;

  return (
    <svg
      className={cn(`icon-${name}`, className)}
      width={width}
      height={height}
      {...props}
    >
      <use href={href} xlinkHref={href} />
    </svg>
  );
}
