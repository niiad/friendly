import React from "react";


const Friends = ({friends, updateFriend, updateCallback}) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }

            const response = await fetch(`http://127.0.0.1:5000/delete_friend/${id}`, options)

            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("failed to delete");
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <h2>Friends</h2>
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Workplace</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {friends.map((friend) => (
                    <tr key = {friend.id}>
                        <td>{friend.fullName}</td>
                        <td>{friend.email}</td>
                        <td>{friend.workplace}</td>
                        <td>
                            <button onClick={() => updateFriend(friend)}>Update</button>
                            <button onClick={() => onDelete(friend.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Friends