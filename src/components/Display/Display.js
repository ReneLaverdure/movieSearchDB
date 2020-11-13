import React from 'react'
import classes from './Display.module.scss'

export default function Display(props) {
    let movie = props.movie;
    console.log(movie.genres)

    // console.log(movie.genres);
    // for(let i = 0; i < movie.genres.length -1; i++){
    //     movie.genres[i].name = movie.genres[i].name + ", "
    // }

    // console.log(movie.genres);


    return (
        <div >  
            <div className={classes.Display}>
                <img className={classes.Display__ImgCard} src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt=""/>
               
                <div className={classes.Display__Text} >
                    <h1>{movie.title}</h1>
                    <p className={classes.Highted}>{movie.tagline}</p>
                    <p className="overview">{movie.overview}</p>

                    <h4 className={classes.Highted}>{movie.genres}</h4>
                    <h4>{movie.productionCompany}</h4>
                    <div className="info-container">
                        <div className="info-item">
                            <p>Release Date:</p>
                            <h4 className={classes.Highted}>{movie.releaseDate}</h4>
                        </div>
                        <div className="info-item">
                            <p>Running Time:</p>
                            <h4 className={classes.Highted}>{movie.runtime}</h4>
                        </div>
                        <div className="info-item">
                            <p>Box Office:</p>
                            <h4 className={classes.Highted}>${movie.revenue}</h4>
                        </div>
                        <div className="info-item">
                            <p>Vote Average:</p>
                            <h4 className={classes.Highted}>{movie.averageScore}/10</h4>
                        </div>
                        <div className="info-item">
                            <p>Buget:</p>
                            <h4 className={classes.Highted}>${movie.buget}</h4>
                        </div>
                    </div>  
                    
                </div>
            </div>
        </div>

    )
}
