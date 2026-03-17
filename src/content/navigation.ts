import type { NavItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getNavigationLinks(locale: Locale): NavItem[] {
  if (locale === 'en') {
    return [
      { id: 1, href: '#aboutMe', text: 'About' },
      { id: 2, href: '#skills', text: 'Skills' },
      { id: 3, href: '#professional', text: 'Experience' },
      { id: 4, href: '#process', text: 'Process' },
      { id: 5, href: '#projects', text: 'Projects' },
      { id: 6, href: '#contact', text: 'marcelo_810@hotmail.com' },
    ];
  }

  return [
    { id: 1, href: '#aboutMe', text: 'Sobre mim' },
    { id: 2, href: '#skills', text: 'Skills' },
    { id: 3, href: '#professional', text: 'Experiência' },
    { id: 4, href: '#process', text: 'Processo' },
    { id: 5, href: '#projects', text: 'Projetos' },
    { id: 6, href: '#contact', text: 'marcelo_810@hotmail.com' },
  ];
}
