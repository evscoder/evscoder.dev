import { useSiteContext } from "@/app/components/layout/site-provider";
import { socialGroups } from "@/app/components/home/model/site-content";
import { Icon } from "@/app/shared/ui/icon/svg-icon";
import { t } from "@/app/shared/lib/i18n";

import s from "./site-footer.module.scss";

export function SiteFooter() {
  const { language } = useSiteContext();
  const footerSocialLinks = [...socialGroups.contacts, ...socialGroups.social];

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s["footer__row"]}>
          <p className={s["footer__copyright"]}>
            © {new Date().getFullYear()} {t(language, "name")} {t(language, "family")}
          </p>
          <ul className={s["footer__socials"]} aria-label="Social links">
            {footerSocialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={s["footer__social-link"]}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <Icon
                    name={link.iconName}
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
