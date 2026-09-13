import { useSiteContext } from "@/app/components/layout/site-provider";
import { socialGroups } from "@/app/components/home/model/site-content";
import { Icon } from "@/app/shared/ui/icon/svg-icon";
import { t } from "@/app/shared/lib/i18n";
import { Braces } from "lucide-react";

import s from "./site-footer.module.scss";

export function SiteFooter() {
  const { language } = useSiteContext();
  const footerSocialLinks = [...socialGroups.contacts, ...socialGroups.social];

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s["footer__card"]}>
          <div className={s["footer__top"]}>
            <div className={s["footer__brand"]}>
              <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#b6ff5c] text-slate-950 shadow-[0_0_36px_rgba(182,255,92,.32)]">
                <Braces className="h-5 w-5" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-white/70" />
            </span>
              <span>EVS.CODER</span></div>
          </div>

          <div className={s["footer__row"]}>
            <p className={s["footer__copyright"]}>© {new Date().getFullYear()} {t(language, "name")} {t(language, "family")}</p>
            <ul className={s["footer__socials"]} aria-label="Social links">
              {footerSocialLinks.map((link) => <li key={link.href}><a className={s["footer__social-link"]} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}><Icon name={link.iconName} width={18} height={18} aria-hidden="true" /><span>{link.label}</span></a></li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
