// import chakra-ui
import { useColorMode, IconButton, Box, Flex, Spacer, Link } from '@chakra-ui/react'
// import icons
import { FaMoon, FaSun, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex m={5}>
      <Box>
        <Link href='https://twitter.com/melend_ez' target='_blank' rel='noreferrer' m={2}>
          <IconButton
            icon={<FaTwitter />}
            isRound='true'
          />
        </Link>
        <Link href='https://www.linkedin.com/in/melendez-dev/' target='_blank' rel='noreferrer' m={2}>
          <IconButton
            icon={<FaLinkedin />}
            isRound='true'
          />
        </Link>
        <Link href='https://github.com/melendez-dev' target='_blank' rel='noreferrer' m={2}>
          <IconButton
            icon={<FaGithub />}
            isRound='true'
          />
        </Link>
      </Box>
      <Spacer />
      <Box>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          size='lg'
          boxSize='50px'
          isRound='true'
          alignSelf='flex-end'
        />
      </Box>
    </Flex>
  )
}

export default ToggleDarkMode
