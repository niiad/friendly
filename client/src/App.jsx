import { useState, useEffect } from 'react';
import Friends from './Friends';
import './App.css';

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

  return <Friends friends={friends} />
}

export default App
