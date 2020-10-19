import { css } from 'styled-components';
import {
  mobileBreakpoint,
  tabletBreakpoint,
  laptopBreakpoint,
  desktopBreakpoint,
} from './constants';

const media = [
  { name: 'mobile', breakpoint: mobileBreakpoint },
  { name: 'tablet', breakpoint: tabletBreakpoint },
  { name: 'laptop', breakpoint: laptopBreakpoint },
  { name: 'desktop', breakpoint: desktopBreakpoint },
  { name: 'lgDesktop' },
];

const mediaQueries = media.map((mediaQuery, i) => {
  // if (i === 0) {
  //  return `@media (max-width: ${mediaQuery.breakpoint}px)`;
  // }
  if (i === media.length - 1) {
    return `@media (min-width: ${media[i-1].breakpoint + 1}px)`
  }
  return `@media (max-width: ${mediaQuery.breakpoint}px)`;
  // return `@media (min-width: ${media[i-1].breakpoint + 1}px) and (max-width: ${mediaQuery.breakpoint}px)`;
});

// mediaQuery is an object whose key is one of 'mobile'/'tablet'/'laptop','desktop','lgdesktop'
// and whose value is a function returning the passed in css wrapped in a media query

export const mediaQuery = Object.fromEntries(mediaQueries.map((mediaQuery, i) => {
  return [
    media[i].name,
    (...args) => css`${mediaQuery} { ${css(...args)} }`,
  ];
}));
