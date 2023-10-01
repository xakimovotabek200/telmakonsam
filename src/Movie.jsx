import React from 'react'

const Movie = ({ title, image }) => {
    return (
        <article>
            <img src={image} alt="" />
            <h1>{title}</h1>
        </article>
    )
}

export default Movie