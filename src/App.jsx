// import chakra-ui
import { Box } from '@chakra-ui/react'
import { Login } from './components/Login'
// import components
import Dashboard from './components/Dashboard'
import ToggleDarkMode from './components/ToggleDarkMode'
// rquire code in the params url
const code = new URLSearchParams(window.location.search).get('code')

function App () {
  return (
    <Box overflow='hidden'>
      <ToggleDarkMode />
      <Box>
        {code ? <Dashboard code={code} /> : <Login />}
      </Box>
    </Box>
  )
}

export default App
