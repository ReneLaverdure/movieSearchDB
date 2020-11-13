import React from 'react';
import DropDown from '../Dropdown/Dropdown';
import logo from '../../Images/themoviedb.svg'


export default function SearchBar(props) {

    return (
        <div className='searchbar'>
            <div>
                <img width="100px" src={logo} alt=""/>
            </div>
            <div className="searchbar__container">
                <input className='searchbar__input' placeholder="Search Movie Titles" type="text" onChange={props.search}/>  
                {props.movies.length > 0 ? <DropDown movies={props.movies} setMovie={props.setMovie} /> : null}      
            </div>
           
        </div>
    )
}
