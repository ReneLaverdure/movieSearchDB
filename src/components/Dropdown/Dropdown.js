import React from 'react'

export default function Dropdown(props) {
    return (
        <div className='dropdown'>
            {props.movies.map((movie, index) => {
                return(
                <button className="dropdown__item" key={index} value={movie.title} onClick={e => props.setMovie(e)}>{movie.title}</button>
                )
            })}
        </div>
    )
}
