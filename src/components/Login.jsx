// import chakra
import { Link, Button, Text, Grid, GridItem, Center } from '@chakra-ui/react'
// import env.js
import { AUTH_URL } from '../../env'

export const Login = () => {
  return (
    <Grid templateColumns='repeat(1, 1fr)'>
      <GridItem mt='120px'>
        <Center>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
            Spotify-Clone
          </Text>
        </Center>

        <GridItem mb={5}>
          <Center as='p'>
            This aplication is for Peaku.
          </Center>
          <Center w='auto'>
            To view this demo you need to sign in with your spotify account.
          </Center>
        </GridItem>
      </GridItem>

      <GridItem>
        <Center>
          <Button colorScheme='teal' size='md'>
            <Link href={AUTH_URL}>
              Login with spotify
            </Link>
          </Button>
        </Center>
      </GridItem>
    </Grid>
  )
}
