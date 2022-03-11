import { useState, useEffect } from 'react'
import axios from 'axios'

export function UseAuth (code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  // localhost:3001/login => sever/index.js
  useEffect(async () => {
    try {
      const res = await axios.post('http://localhost:3001/login', {
        code
      })
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      window.history.pushState({}, null, '/')
    } catch (error) {
      window.location = '/'
    }
  }, [code])

  // localhost:3001/refresh => server/index.js
  useEffect(async () => {
    if (!refreshToken || expiresIn) return
    const timeout = setInterval(async () => {
      try {
        const res = await axios.post('http://localhost:3001/refresh', {
          refreshToken
        })
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)
      } catch (error) {
        window.location = '/'
      }
    }, (expiresIn - 60) * 1000)
    return () => clearInterval(timeout)
  }, [refreshToken, expiresIn])
}
