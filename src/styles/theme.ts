import {css} from 'styled-components';

export const theme = {
  colors: {
    // blue900: '#1e2733', --> primaryDark
    // gray500: '#94989e', --> mediumDark
    // gray700: '#656a73', --> dark
    // yellow500: '#EBC86E', --> secondary
    // yellow700: '#6b6349', --> secondaryDark

    // Palette
    primary: '#255799',
    primaryLight: '#5b98e8',
    primaryDark: '#1e2733',
    secondary: '#ebc86e',
    secondaryLight: '#f6dea5',
    secondaryDark: '#6b6349',

    info: '#0284fe',
    warning: '#d6ae3e',
    danger: '#D93025',
    dangerLight: '#ff9089',
    success: '#0ba063',
    successLight: '#72d5ac',

    // Monochrome
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    black: '#000000'

    // border: 'rgba(0,0,0,.1)',
    // boxShadowsmall: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    // boxShadowmedium: '0 1px 2px 0 rgba(0, 0, 0, 0.6)',
    // boxShadowlarge: '0 1px 2px 0 rgba(0, 0, 0, 0.6)',
  },
  fonts: {
    primary:
      '"Roboto", stack-sans, "Open Sans", "Lato", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    mono: "'Roboto Mono', stack-mono, monospace"
  },
  fontWeights: {
    thin: 200,
    regular: 400,
    bold: 600,
    extrabold: 800
  },
  fontSizes: {
    small: '.7rem',
    normal: '1rem',
    medium: '1.2rem',
    mediumLarge: '1.5rem',
    large: '1.7rem',
    xLarge: '2rem',
    xxLarge: '36px',
    xxxLarge: '48px',
    xxxxLarge: '72px'
  },
  buttons: {
    primary: {color: '#ffffff', bg: '#0284fe', light: '#cce6ff'},
    secondary: {color: '#ffffff', bg: '#fe7c02', light: '#ffe5cc'},
    terciary: {color: '#ffffff', bg: '#666666', light: '#eeeeee'}
  },
  spaces: {
    p500: '5rem',
    p400: '4rem',
    p300: '3rem',
    p200: '2rem',
    p100: '1rem',
    p50: '.5rem',
    p25: '.25rem'
  },
  mq: {
    xs: '22em',
    sm: '40em',
    md: '54em',
    lg: '78em',
    xl: '125em'
  },
  media: {
    xs: (...args: TemplateStringsArray[]) => css`
      @media (max-width: ${theme.mq.xs}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
    sm: (...args: TemplateStringsArray[]) => css`
      @media (max-width: ${theme.mq.sm}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
    md: (...args: TemplateStringsArray[]) => css`
      @media (max-width: ${theme.mq.md}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
    lg: (...args: TemplateStringsArray[]) => css`
      @media (max-width: ${theme.mq.lg}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
    xl: (...args: TemplateStringsArray[]) => css`
      @media (max-width: ${theme.mq.xl}) {
        // @ts-ignore
        ${css(...args)}
      }
    `,
    hover: (...args: TemplateStringsArray[]) => css`
      @media not all and (hover: none) {
        // @ts-ignore
        ${css(...args)}
      }
    `
  }
};
