'use client';

import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type MouseEvent } from 'react';

import { useSiteContext } from '@/app/components/layout/site-provider';
import { LanguageSwitcher } from '@/app/shared/ui/language-switcher/language-switcher';
import { ThemeSwitcher } from '@/app/shared/ui/switcher-theme/switcher-theme';

import { ArrowUpRight, Menu, X } from 'lucide-react';

import s from './site-header.module.scss';

const navigationLinks = [
  { id: 'about', ru: 'Обо мне', en: 'About me' },
  { id: 'projects', ru: 'Проекты', en: 'Projects' },
  { id: 'contact', ru: 'Контакты', en: 'Contact' },
] as const;

const socialLinks = [
  { slug: 'https://t.me/evgenystaroverov', text: 'Telegram' },
  { slug: 'https://github.com/evscoder', text: 'GitHub' },
  { slug: 'https://www.linkedin.com/in/evgst/', text: 'LinkedIn' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const sectionHref = (id: string) => `${pathname === '/' ? '' : '/'}#${id}`;
  const [isFixed, setFixed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollingToSectionRef = useRef<string | null>(null);
  const openMenu = () => {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  };
  const closeMenu = () => dialogRef.current?.close();

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setActiveSection(id);

    if (pathname !== '/') {
      return;
    }

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    event.preventDefault();
    scrollingToSectionRef.current = id;
    window.history.pushState(null, '', `#${id}`);

    section.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = setTimeout(() => {
      scrollingToSectionRef.current = null;
    }, 1500);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 768px)');
    const onResize = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);
  const { currentDate, currentTime, isThemeAlt, language, setLanguage, toggleTheme } =
    useSiteContext();

  useEffect(() => {
    let frame = 0;
    const updatePosition = () => {
      frame = 0;
      setFixed(window.scrollY > 74);

      if (scrollingToSectionRef.current) {
        setActiveSection(scrollingToSectionRef.current);
        return;
      }

      const middle = window.innerHeight / 2;
      let active: string | null = null;
      for (const link of navigationLinks) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= middle) active = link.id;
      }
      // The last section can be too short to reach the viewport midpoint.
      if (
        pathname === '/' &&
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      ) {
        active = navigationLinks[navigationLinks.length - 1].id;
      }
      setActiveSection(active);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };
    const finishNavigation = () => {
      scrollingToSectionRef.current = null;

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = null;
      }

      scheduleUpdate();
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('scrollend', finishNavigation);
    window.addEventListener('resize', scheduleUpdate);
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('scrollend', finishNavigation);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver.disconnect();

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [pathname]);

  return (
    <>
      <a className="personal-skip" href="#main">
        {language === 'ru' ? 'К содержимому' : 'Skip to content'}
      </a>
      <header className={cn(s['page-header'], isFixed && s['is-fixed'])}>
        <div className={cn(s['page-header__container'], 'container px-0!')}>
          <div className={s['page-header__row']}>
            <div className={s['page-header__left']}>
              <div className={s['page-header__nav']}>
                <div className={s['page-header__end']}>
                  <ThemeSwitcher isActive={isThemeAlt} onToggle={toggleTheme} language={language} />
                  <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

                  <nav
                    className="personal-navigation"
                    aria-label={language === 'ru' ? 'Разделы страницы' : 'Page sections'}
                  >
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={sectionHref(link.id)}
                        aria-current={activeSection === link.id ? 'location' : undefined}
                        onClick={(event) => handleSectionClick(event, link.id)}
                      >
                        {link[language]}
                      </Link>
                    ))}
                  </nav>
                  <button
                    ref={menuButtonRef}
                    type="button"
                    className={s['menu-toggle']}
                    onClick={openMenu}
                    aria-haspopup="dialog"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                  >
                    <span>{language === 'ru' ? 'Меню' : 'Menu'}</span>
                    <Menu size={20} aria-hidden="true" />
                  </button>
                  <div className={s['page-header__time']}>
                    <div className="time">{currentTime || '--:--'}</div>
                    <div className={s['page-header__date']}>
                      {currentDate || (language === 'ru' ? 'местное время' : 'local time')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className={s['mobile-overlay']}
        aria-labelledby="mobile-menu-title"
        onClose={() => {
          setMenuOpen(false);
          menuButtonRef.current?.focus({ preventScroll: true });
        }}
      >
        <div className={s['mobile-overlay__top']}>
          <span className={s['mobile-overlay__brand']}>
            EVS.CODER <span>/ navigation</span>
          </span>
          <button
            type="button"
            className={s['menu-close']}
            onClick={closeMenu}
            aria-label={language === 'ru' ? 'Закрыть меню' : 'Close menu'}
            autoFocus
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <h2 id="mobile-menu-title" className={s['mobile-overlay__title']}>
          {language === 'ru' ? 'Навигация' : 'Navigation'}
        </h2>
        <nav
          className={s['mobile-overlay__nav']}
          aria-label={language === 'ru' ? 'Разделы страницы' : 'Page sections'}
        >
          {navigationLinks.map((link, index) => (
            <Link
              href={sectionHref(link.id)}
              key={link.id}
              aria-current={activeSection === link.id ? 'location' : undefined}
              onClick={(event) => {
                handleSectionClick(event, link.id);
                closeMenu();
              }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {link[language]}
              <ArrowUpRight size={24} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className={s['mobile-overlay__social']}>
          <p>{language === 'ru' ? 'На связи' : 'Find me online'}</p>
          <div>
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.slug}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                {item.text}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a
            className={s['mobile-overlay__email']}
            href="mailto:evgst.gl@gmail.com"
            onClick={closeMenu}
          >
            evgst.gl@gmail.com
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  );
}
