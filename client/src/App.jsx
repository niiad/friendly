import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetchFriends()
  }, [])

  const fetchFriends = async () => {
    const response = await fetch("http://127.0.0.1:5000/friends")
    const data = await response.json()

    setFriends(data.friends)
  }

  return (
    <>
      
    </>
  )
}

export default App
