import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  ...chakraTheme.fonts,
  body: `Maitree,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  body: `Maitree,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  lg: '62em',
})

const colors = {
  ...chakraTheme.colors,
  brand: {
    ateneo: '#05386B',
    emerald: '#379683',
    lightMalachite: '#5cdb95',
    tealDeer: '#8ee4af',
    alabaster: '##ebf0e4',
  },
  primary: {
    main: '#05386B',
    secondry: '#379683',
    text: '#5cdb95',
    button: '#8ee4af',
    background: '##ebf0e4',
  },
  buttonPrimary: {
    main: '#5cdb95',
  },
}

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: '600',
    fontSizes: '0.875rem',
    textTransform: 'uppercase',
    borderRadius: 20,
  },
  variants: {
    solid: {
      bg: colors.buttonPrimary.main,
      color: 'black',
      boxShadow: '0 0 10px  rgba(0,0,0,0.2)',
      _hover: {
        bg: colors.buttonPrimary.main,
        boxShadow: '0 0 10px  rgba(0,0,0,0.5)',
      },
      _focus: {
        bg: colors.buttonPrimary.main,
      },
    },
  },
}

const overrides = {
  ...chakraTheme,
  fonts,
  colors,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  components: {
    Button,
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
