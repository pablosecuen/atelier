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
    {title: 'SHIRTS', path: '/search?q=shirts'},
    {title: 'ACCESORIES', path: '/search?q=accesories'},
    {title: 'ABOUT US', path: '/about'},
]

export const menu: { title: string; path: string }[] = [
    {title: 'HOME', path: '/'},
    {title: 'SHIRTS', path: '/search?q=shirts'},
    {title: 'ACCESORIES', path: '/search?q=accesories'},
    {title: 'ABOUT US', path: '/about'},

]

export const menuInformation: { title: string; path: string }[] = [

  {title: 'FAQS', path: '/faqs'},
  {title: 'TERMS & CONDITIONS', path: '/terminosycondiciones'},
  {title: 'PRIVACY POLICY', path: '/privacidad'},
  {title: 'OUR PRODUCTION', path: '/production'},
  {title: 'OUR IMPACT', path: '/impact'},
]