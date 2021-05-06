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
        
    }

    return (
        <div>
            <p>You are on the Create Exercise component</p>            
        </div>
    )
}

export default CreateExercise
