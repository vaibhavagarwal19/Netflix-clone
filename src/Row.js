import React, { useState, useEffect } from "react";
import axios from "./axios";
import './row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = `https://image.tmdb.org/t/p/original/`;

function Row(props) {
  

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props?.fetchUrl);
      // console.table(request.data.results);
      setMovies(request?.data?.results);
      return request;
    }
    fetchData();
  }, [props?.fetchUrl]); 

  console.log(setMovies)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick= (movie) => {
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer( movie?.title || '')
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v')) ;
      })
      .catch((error)=> console.log(error))
    }
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
          key={movie?.id}
          onClick={()=> handleClick(movie)}
            className={`row-poster ${props?.isLargeRow && 'rowPosterLarge'}`}
            src={`${base_url}${props?.isLargeRow ? movie.poster_path: movie.backdrop_path }`}
            alt={movie.name}
          />
        ))}
      </div>
      { trailerUrl && <YouTube videoId={movieTrailer} opts={opts}/>} 
    </div>
  );
}

export default Row;
