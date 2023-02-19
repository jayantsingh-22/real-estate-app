import { extendTheme, theme as base, withDefaultVariant } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'purple.50'
        }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'purple', // default is gray
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: 'purple.500'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'purple.500'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: 'purple.500'
      }
    }
  }
});