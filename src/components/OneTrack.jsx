import { Flex, Container, IconButton, Box, Heading, Image, Center, Spacer, Grid, GridItem, Link } from '@chakra-ui/react'
import { BsArrowDownSquareFill, BsFillPlayCircleFill } from 'react-icons/bs'
const OneTrack = ({ trackSelected, clearTrack }) => {
  console.log(trackSelected)
  function handleClear () {
    clearTrack()
  }
  return (
    <Container mt={5}>
      <Grid alignItems='center' justifyContent='center' templateColumns='repeat(3, 1fr)'>
        <GridItem>
          <IconButton icon={<BsArrowDownSquareFill />} isRound='true' onClick={handleClear} />
        </GridItem>
        <GridItem>
          <Heading size='md' alignSelf='center' pl={5} textAlign='center' mt={1}>
            {trackSelected.title}
          </Heading>
        </GridItem>
      </Grid>
      <Center>
        <Image src={trackSelected.imageLG} boxSize='250px' mt={3} rounded='full' alt={trackSelected.title} />
      </Center>
      <Grid alignItems='center' templateColumns='repeat(3, 1fr)' justifyContent='center'>
        <GridItem>
          <Heading size='lg' alignSelf='center' mt={3}>
            {trackSelected.artist}
          </Heading>
        </GridItem>
        <GridItem justifySelf='center' mt={2}>
          <Link href={trackSelected.uri}>
            <IconButton icon={<BsFillPlayCircleFill />} isRound='true' />
          </Link>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default OneTrack
