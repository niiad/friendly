import { useState } from "react";


export default function FriendForm({existingFriend = {}, updateCallback}) {
    const [fullName, setFullName] = useState(existingFriend.fullName || "")
    const [email, setEmail] = useState(existingFriend.email || "")
    const [workplace, setWorkplace] = useState(existingFriend.workplace || "")

    const updating = Object.entries(existingFriend).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            fullName,
            email,
            workplace
        }

        const url = "http://127.0.0.1:5000/" + (updating ? `update_friend/${existingFriend.id}` : "add_friend")

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options)

        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()

            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return <form onSubmit = {onSubmit}>
        <div>
            <label htmlFor="fullName">Full Name:</label>
            <input 
                type="text" 
                id="fullName" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
            />
        </div>
        <div>
            <label htmlFor="Email">Email:</label>
            <input 
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="workplace">Workplace:</label>
            <input 
                type="text"
                id="workplace"
                value={workplace}
                onChange={(e) => setWorkplace(e.target.value)}
            />
        </div>
        <button type="submit">Add Friend</button>
    </form>
}