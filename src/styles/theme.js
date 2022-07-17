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

  buttons: {
    main: '#c1fba4',
    social: '#a98467',
  },
  section: {
    title: {
      header: 'white',
      background: '#a98467',
    },
    footer: '#90f1ef',
    keyDates: {
      supply: '#c1fba4',
    },
    benefits: '#5cdb95',
    accordian: '#ee6055',
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
      bg: colors.buttons.main,
      color: 'black',
      boxShadow: '0 0 10px  rgba(0,0,0,0.2)',
      _hover: {
        bg: colors.buttons.main,
        boxShadow: '0 0 10px  rgba(0,0,0,0.5)',
      },
      _focus: {
        bg: colors.buttons.main,
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
