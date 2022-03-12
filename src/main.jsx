import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
// important to add style of chakra-ui
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
// import @fontsource
import '@fontsource/hubballi'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
