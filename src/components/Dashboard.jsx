import { Box } from '@chakra-ui/react'
import { UseAuth } from './UseAuth'

const Dashboard = ({ code }) => {
  const accessToken = UseAuth(code)
  return (
    <Box>
      {code}
    </Box>
  )
}

export default Dashboard
