import { useState, useEffect } from 'react';
import Friends from './Friends';
import './App.css';
import FriendForm from './FriendFrom';

function App() {
  const [friends, setFriends] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFriend, setCurrentFriend] = useState({})

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
    
    setCurrentFriend({})
  }  

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (friend) => {
    if (isModalOpen) {
      return
    }

    setCurrentFriend(friend)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()

    fetchFriends()
  }

  return (
    <>
      <Friends friends={friends} updateFriend={openEditModal} updateCallback={onUpdate}/>
      <button onClick={openCreateModal}>Add</button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <FriendForm existingFriend={currentFriend} updateCallback={onUpdate}/>
        </div>
      </div>
        
      }
    </>
  )
}

export default App
