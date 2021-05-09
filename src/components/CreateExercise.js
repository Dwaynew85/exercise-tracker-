import React, {useState} from 'react';
import DatePicker from "react-datepicker";

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
                        value={duration}
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
                            onChange={(event) => setDate(event.target.value)}
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
