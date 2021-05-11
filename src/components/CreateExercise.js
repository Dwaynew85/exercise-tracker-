import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        return (
            setUsers(["test user"]),
            setUsername("test user")
        )
    }, [])

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
                    <select 
                        required
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    >
                        {
                            users.map(user => <option key={user} value={user}>{user}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={(event) => console.log(event)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise
