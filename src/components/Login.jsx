// import chakra
import { Link } from '@chakra-ui/react'
// import env.js
import { AUTH_URL } from '../../env'

export const Login = () => {
  return (
    <Link href={AUTH_URL}>
      Login with spotify
    </Link>
  )
}
