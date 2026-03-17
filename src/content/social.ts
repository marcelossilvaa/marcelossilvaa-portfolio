import type { ContactItem, SocialLink } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getSocialLinks(locale: Locale): SocialLink[] {
  return [
    { id: 1, title: 'LinkedIn', link: 'https://www.linkedin.com/in/marcelossilva1/' },
    { id: 2, title: 'GitHub', link: 'https://github.com/marcelossilvaa' },
    {
      id: 3,
      title: 'WhatsApp',
      link: 'https://wa.me/5577991219434',
    },
    { id: 4, title: 'Instagram', link: 'https://www.instagram.com/marcelossilva1/' },
  ];
}

export function getContactLinks(locale: Locale): ContactItem[] {
  return [
    {
      id: 1,
      label: 'Instagram',
      value: '@marcelossilva1',
      href: 'https://www.instagram.com/marcelossilva1/',
    },
    {
      id: 2,
      label: 'WhatsApp',
      value: '(77) 99121-9434',
      href: 'https://wa.me/5577991219434',
    },
    {
      id: 3,
      label: locale === 'en' ? 'Email' : 'Email',
      value: 'marcelo_810@hotmail.com',
      href: 'mailto:marcelo_810@hotmail.com',
    },
  ];
}
