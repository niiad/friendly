import { useState, useEffect } from 'react';
import Friends from './Friends';
import './App.css';
import FriendForm from './FriendFrom';

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
      <Friends friends={friends} />
      <FriendForm />
    </>
  )
}

export default App
