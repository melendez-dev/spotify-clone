const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')
const app = express()

// PORT
const PORT = 3001

// app.use
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// login
app.post('/login', async (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '741c3f6f609d4219bf2974cc40b43326',
    clientSecret: 'f5da420c44194e4f8ba6588385c4fb9f'
  })
  try {
    const data = await spotifyApi.authorizationCodeGrant(code)
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
})

// refresh
app.post('/refresh', async (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '741c3f6f609d4219bf2974cc40b43326',
    clientSecret: 'f5da420c44194e4f8ba6588385c4fb9f',
    refreshToken
  })
  try {
    const data = await spotifyApi.refreshAccessToken()
    res.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in
    })
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log('Watching on PORT', PORT)
})
