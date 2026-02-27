'use client';

import Title from '../../components/Tittle';
import { getContactLinks } from '@/content/social';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Footer() {
  const { locale } = useLocale();
  const text = translations[locale];
  const contactLinks = getContactLinks(locale);

  return (
    <footer id="contact" className="w-full bg-bg-secondary py-10">
      <div className="flex flex-col justify-center items-center gap-2 text-sm md:text-lg text-text-secondary">
        <Title title={text.sections.contact} />
        <p>{text.footer.cta}</p>
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            className="header-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.label}: {contact.value}
          </a>
        ))}
        <p className="text-text-primary font-semibold">{text.footer.developedBy}</p>
        <p className="text-sm">© Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}