import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
// important to add style of chakra-ui
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
