import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function FetchMovie(movieID) {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false)
    
    useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(res => {
              
              for(let i = 0; i < res.data.production_companies.length -1; i++){
                res.data.production_companies[i].name = res.data.production_companies[i].name + ", ";
              };
    
              for(let i = 0; i < res.data.genres.length -1; i++){
                res.data.genres[i].name = res.data.genres[i].name + ", ";
              };
    
              let productionData = [...res.data.production_companies];
              let productionCompanies = "";
     
              productionData.forEach(item => {
                productionCompanies = productionCompanies + item.name
              })
         
              let genreData = [...res.data.genres]
              let genre = "";
    
              genreData.forEach(item => {
                genre = genre + item.name
              })
    
                let set = {
                  id: res.data.id,
                  title: res.data.title,
                  releaseDate: res.data.release_date,
                  overview: res.data.overview,
                  backdrop: res.data.backdrop_path,
                  poster: res.data.poster_path,
                  averageScore: res.data.vote_average,
                  language:  res.data.original_language,
                  buget: Number((res.data.budget).toFixed(1)).toLocaleString(),
                  genres: genre,
                  productionCompany: productionCompanies,
                  runtime: res.data.runtime,
                  revenue: Number((res.data.revenue).toFixed(1)).toLocaleString(),
                  tagline: res.data.tagline
                }
             
                setMovie({...set});       
            })
            .catch(e => {
                if(axios.isCancel(e)){
                    return setError(true)
                }
            })
        }, [movieID])

        console.log(movie)
        return {movie, error}
}
