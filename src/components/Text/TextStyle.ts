import { HTMLAttributes } from 'react';

export interface ITextInfo extends HTMLAttributes<HTMLParagraphElement> {
  fontFamily: string;
  desktopFontSize: string;
  mobileFontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}

interface IVariant {
  [key: string]: ITextInfo;
}

export const TextTypes: IVariant = {
  h1: {
    fontFamily: 'MonserratBlack',
    desktopFontSize: '200px',
    mobileFontSize: '96px',
    fontWeight: '900',
    lineHeight: '80%',
    letterSpacing: '0',
  },

  h2: {
    fontFamily: 'MonserratBlack',
    desktopFontSize: '48px',
    mobileFontSize: '32px',
    fontWeight: '900',
    lineHeight: '80%',
    letterSpacing: '0',
  },

  h3: {
    fontFamily: 'MonserratBlack',
    desktopFontSize: '32px',
    mobileFontSize: '24px',
    fontWeight: '900',
    lineHeight: '100%',
    letterSpacing: '0',
  },

  default: {
    fontFamily: 'Monserrat',
    desktopFontSize: '18px',
    mobileFontSize: '16px',
    fontWeight: 'semibold',
    lineHeight: '150%',
    letterSpacing: '0',
  },
};
