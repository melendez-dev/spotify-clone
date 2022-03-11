import { Login } from './components/Login'
// import components
import Dashboard from './components/Dashboard'
// code in params
const code = new URLSearchParams(window.location.search).get('code')

function App () {
  return (
    <>
      {code ? <Dashboard code={code} /> : <Login />}
    </>
  )
}

export default App
