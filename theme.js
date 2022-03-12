// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. extend the theme
const theme = extendTheme({
  fonts: {
    heading: 'Hubballi',
    body: 'Hubballi'
  },
  initialColorMode: 'light',
  useSystemColorMode: false
})

export default theme
