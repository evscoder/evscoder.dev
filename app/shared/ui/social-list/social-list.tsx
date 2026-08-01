import cn from "clsx";

import type { SocialLink } from "@/app/components/home/model/site-content";
import { Icon } from "@/app/shared/ui/icon/svg-icon";

import s from "./social-list.module.scss";

type SocialListProps = {
  links: SocialLink[];
};

export function SocialList({ links }: SocialListProps) {
  return (
    <ul className={s["social-list"]}>
      {links.map((link) => (
        <li key={link.href} className={s["social-list__item"]}>
          <a
            className={cn(s["social-list__link"], "glass-morphism")}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className={s["social-list__link-icon"]}
              name={link.iconName}
              aria-hidden="true"
              width={28}
              height={32}
            />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
