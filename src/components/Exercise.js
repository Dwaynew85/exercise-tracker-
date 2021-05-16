import React from 'react'

function Exercise({exercise}) {
    return (
        <tr>
         <td>{exercise.username}</td>
         <td>{exercise.description}</td>   
         <td>{exercise.duration}</td>   
         <td>{exercise.date.substring(0,10)}</td>   
        </tr>
    )
}

export default Exercise
