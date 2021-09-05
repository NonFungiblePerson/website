// eslint-disable

import { extendTheme } from '@chakra-ui/react';

const theme = {
  colors: {
    nfpGreen: '#00be98',
    nfpNavy: '#3A3F5C',
    alertRed: '#EB5757',
    nfpOrange: '#F2994A',
    nfpGray: '#808080',
    nfpGreys: {
      100: '#F0F0F0',
      200: '#F2F2F2',
      400: '#707070',
    },
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '13px',
    lg: '14px',
    xl: '16px',
    '2xl': '18px',
    '3xl': '20px',
    '4xl': '22px',
    '5xl': '24px',
    '6xl': '28px',
    '7xl': '32px',
    '8xl': '40px',
    '9xl': '60px',
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};
export const ChakraTheme = extendTheme(theme);
