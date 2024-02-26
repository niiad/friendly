import { useState } from "react";

// eslint-disable-next-line no-empty-pattern
export default function FriendForm({}) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [workplace, setWorkplace] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            fullName,
            email,
            workplace
        }

        const url = "http://127.0.0.1:5000/add_friend"

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