import { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Eroare:' + err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Se incarca...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>Users</h3>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default Users;