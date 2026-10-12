import { ArrowUpRight, Send } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import { useSiteContext } from '@/app/components/layout/site-provider';

export function ContactPanel() {
  const { language } = useSiteContext();
  const ru = language === 'ru';
  return (
    <Panel className="lg:col-span-2">
      <section
        id="contact"
        className="detail-section personal-contact"
        aria-labelledby="contact-title"
      >
        <p className="personal-kicker">
          <Send size={18} aria-hidden="true" />
          CONTACT / SAY HELLO
        </p>
        <h2 id="contact-title">{ru ? 'Давайте знакомиться.' : 'Let’s get to know each other.'}</h2>
        <p>
          {ru
            ? 'Если ищете frontend-разработчика в команду, хотите обсудить техническую задачу или просто пообщаться о разработке — напишите.'
            : 'Looking for a frontend developer for your team, want to discuss a technical challenge, or just talk about development? Get in touch.'}
        </p>
        <div className="personal-contact__links">
          <a href="mailto:evgst.gl@gmail.com">
            evgst.gl@gmail.com
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href="https://t.me/evgenystaroverov" target="_blank" rel="noreferrer">
            Telegram
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/evgst/" target="_blank" rel="noreferrer">
            LinkedIn
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </Panel>
  );
}
