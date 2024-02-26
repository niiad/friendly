import { useState, useEffect } from 'react';
import Friends from './Friends';
import './App.css';
import FriendForm from './FriendFrom';

function App() {
  const [friends, setFriends] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchFriends()
  }, [])

  const fetchFriends = async () => {
    const response = await fetch("http://127.0.0.1:5000/friends")
    const data = await response.json()

    setFriends(data.friends)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }  

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  return (
    <>
      <Friends friends={friends} />
      <button onClick={openCreateModal}>Add</button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <FriendForm />
        </div>
      </div>
        
      }
    </>
  )
}

export default App
