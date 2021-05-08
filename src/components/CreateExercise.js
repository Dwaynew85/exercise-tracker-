import React, {useState} from 'react';

function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const handleChange = e => {
        console.log(e)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const exercise = {
            username,
            description,
            duration,
            date,
            users
        }
        console.log(exercise)
        window.location = '/'
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput" 
                        required
                        className="form-control"
                        value={username}
                        onChange={((event) => setUsername(event.target.value))}
                    >
                        {
                            this.users.map(user => <option key={user} value={user}>{user}</option>)
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise
