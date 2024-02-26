import React from "react";


const Friends = ({friends}) => {
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
                {friends.map((friend) => {
                    <tr key = {friend.id}>
                        <td>{friend.fullName}</td>
                        <td>{friend.email}</td>
                        <td>{friend.workplace}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default Friends