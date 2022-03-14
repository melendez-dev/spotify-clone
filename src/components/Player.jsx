import SpotifyPlayer from 'react-spotify-web-playback'
const Player = ({ accessToken, trackUri, bg }) => {
  const autoPlay = true
  return (
    <SpotifyPlayer
      autoPlay={autoPlay}
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
      styles={{
        bgColor: { bg }
      }}
    />
  )
}
export default Player
