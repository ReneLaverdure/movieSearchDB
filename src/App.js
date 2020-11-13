import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Display from './components/Display/Display';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';

import FetchMovie from './hooks/FetchMovie'

function App() {
  const [search, setSearch] = useState('');
  const [movieID, setMovieID] = useState(348)
  const [searchResult, setSearchResult] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});

  const {movie} = FetchMovie(movieID)

  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
      .then(res => {
          let result = res.data.results.slice(0, 5);
          setSearchResult([...result]);
      }) 

  }, [search])

  useEffect(() => {
    setCurrentMovie({...movie})
  }, [movie])


  const selectedMovie = (e) => {
    let set = [...searchResult];
    set = set.filter(movie => movie.title === e.target.value);

    setMovieID(set[0].id)
    setSearchResult([])
  }

  const backdrop = `https://image.tmdb.org/t/p/original${currentMovie.backdrop}`
  const style = {
        backgroundImage: `url(${backdrop})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
      }


  return (
    <div style={style} className="App">
      <div className='BackDropShade'>
        
        <div className="container">
          <SearchBar movies={searchResult} setMovie={selectedMovie} search={e => setSearch(e.target.value)} />  
          <Display movie={currentMovie} /> 
          
        </div>


      </div>
      <Footer />
    </div>
  );
}

export default App;
 