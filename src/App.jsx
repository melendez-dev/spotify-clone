// import chakra-ui
import { Box, Center } from '@chakra-ui/react'
import { Login } from './components/Login'
// import components
import Dashboard from './components/Dashboard'
import ToggleDarkMode from './components/ToggleDarkMode'
// code in params
const code = new URLSearchParams(window.location.search).get('code')

function App () {
  return (
    <Box overflow='hidden'>
      <ToggleDarkMode />
      <Center mt={5}>
        {code ? <Dashboard code={code} /> : <Login />}
      </Center>
    </Box>
  )
}

export default App
