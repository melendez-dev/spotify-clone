// import @chakra-ui
import { Box, Heading, InputGroup, Input, InputLeftElement, useColorModeValue, Flex, useToast, Center, Text } from '@chakra-ui/react'
// import react and icons
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
// import auth to spotify
import { UseAuth } from './UseAuth'
import SpotifyWebApi from 'spotify-web-api-node'
// import components
import TrackResults from './TrackResults'
import Player from './Player'
// import env to clientId
import { CLIENT_ID } from '../../env'

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID
})

const Dashboard = ({ code }) => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playing, setPlaying] = useState()
  const accessToken = UseAuth(code)
  // change the bagraoundColor in the dark mode
  const bg = useColorModeValue('gray.50', 'gray.800')
  // component of @chakra-ui to simule an alert
  const toast = useToast()

  // fuction chooseTrack
  function chooseTrack (track) {
    setPlaying(track)
    setSearch('')
  }
  // useEffect
  useEffect(async () => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  // handleSubit to preventDefault on form
  // and return the information of spotify api'
  const handleSubmit = e => {
    e.preventDefault()
    // if there is not a value in the input.value put a []
    if (!search) return setSearchResults([])
    if (!accessToken) return
    spotifyApi.searchTracks(search).then(res => {
      // if there is not a tracks trow a alert
      if (res.body.tracks.items.length === 0) {
        toast({
          title: 'not tracks',
          status: 'error',
          duration: 2000,
          isClosable: true
        })
      }
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImages = track.album.images.reduce((smallest, image) => {
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImages.url
        }
      }))
    })
  }

  return (
    <Flex m={2} direction='column' py={2} h='80vh' overflow='hidden'>
      <Heading fontSize='5xl' fontWeight='extrabold'>
        Search
      </Heading>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<FaSearch />}
          />
          <Input
            type='search'
            placeholder='Artist, Song, Lyrics and More'
            fontSize='18px' bg={bg}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </InputGroup>
      </form>
      <Box flexGrow='1' my={2} overflowY='auto'>
        {searchResults.map((track) => (
          <TrackResults track={track} key={track.uri} chooseTrack={chooseTrack} />
        ))}
      </Box>
      <Box pos='fixed' bottom='0' w='100%' left='0'>
        <Player accessToken={accessToken} trackUri={playing?.uri} bg={bg} />
      </Box>
    </Flex>
  )
}

export default Dashboard
