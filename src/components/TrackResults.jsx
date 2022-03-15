// import chakra
import { Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'
// to pass that function to onclick
const TrackResults = ({ track, chooseTrack }) => {
  function handlePlay () {
    chooseTrack(track)
  }
  return (
    <Flex m={2} alignItems='center' cursor='pointer' onClick={handlePlay}>
      <Image src={track.albumUrl} alt={track.artists} borderRadius='full' />
      <Box ml={2}>
        <Heading size='md'> {track.title} </Heading>
        <Text color='gray.500' isTruncated>{track.artist}</Text>
      </Box>
    </Flex>
  )
}

export default TrackResults
