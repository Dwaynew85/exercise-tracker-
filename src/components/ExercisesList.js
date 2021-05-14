import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function ExercisesList() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        return (
            axios.get('http://localhost:5000/exercises/')
                .then(response => {
                    setExercises(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        )
    }, [])

    const deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));
        setExercises(exercises.filter(el => el._id !== id))
    }

    return (
        <div>
            <p>You are on the Exercise List component</p>
        </div>
    )
}

export default ExercisesList
