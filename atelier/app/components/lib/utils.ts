import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;



export const mobileMenu: { title: string; path: string }[] = [
    {title: 'HOME', path: '/'},
    {title: 'SHIRTS', path: '/shop?q=shirts'},
    {title: 'ACCESORIES', path: '/shop?q=accesories'},
    {title: 'ABOUT US', path: '/about'},
]

export const menu: { title: string; path: string }[] = [
    {title: 'HOME', path: '/'},
    {title: 'SHIRTS', path: '/shop?q=shirts'},
    {title: 'ACCESORIES', path: '/shop?q=accesories'},
    {title: 'NOSOTROS', path: '/nosotros'},

]

export const menuInformation: { title: string; path: string }[] = [

  {title: 'FAQS', path: '/faqs'},
  {title: 'OUR PRODUCTION', path: '/nosotros/#production'},
  {title: 'OUR IMPACT', path: '/nosotros/#impact'},
  {title: 'TERMS & CONDITIONS', path: '/nosotros/#terms'},
  {title: 'PRIVACY POLICY', path: '/nosotros/#privacy'},
]