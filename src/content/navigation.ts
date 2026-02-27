import type { NavItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getNavigationLinks(locale: Locale): NavItem[] {
  if (locale === 'en') {
    return [
      { id: 1, href: '#aboutMe', text: 'About' },
      { id: 2, href: '#skills', text: 'Skills' },
      { id: 3, href: '#academicEducation', text: 'Education' },
      { id: 4, href: '#projects', text: 'Projects' },
      { id: 5, href: '#contact', text: 'marcelo_810@hotmail.com' },
    ];
  }

  return [
    { id: 1, href: '#aboutMe', text: 'Sobre mim' },
    { id: 2, href: '#skills', text: 'Skills' },
    { id: 3, href: '#academicEducation', text: 'Formação' },
    { id: 4, href: '#projects', text: 'Projetos' },
    { id: 5, href: '#contact', text: 'marcelo_810@hotmail.com' },
  ];
}
