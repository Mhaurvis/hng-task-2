import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import tomato from '../Images/tomato.png';
import imdb from '../Images/imdb.png'
import '../styles/practice.css';

function Movie(){
    const [movieData, setMovieData] = useState([]);

    useEffect(() =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1a4ffa1b8e0fa13200d8c8fde4042869&language=en-US&page=3")
        .then((res) => res.json())
        .then((data) => setMovieData(data.results.slice(0, 1)))
    }, []);

    return(
        <div className='movie-container'>
            { movieData.map((movie) => (
                <div className='movie-background' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}>
                    <div className='movie-details'>
                        <h1 className='title'>{movie.title}</h1>
                        <div className='rating'>
                            <div className='imdb'>
                                <img src={imdb} alt='imdb-img' />
                                <p>{movie.vote_average}/10</p>                                
                            </div>
                            <div className='tomatoes'>
                                <img src={tomato} alt='tomato-img' />
                                <p>{movie.vote_count}</p>
                            </div>
                        </div>
                        <p className='overview'>{movie.overview}</p>
                        <button className='btn btn-danger btn-sm'> <span className='fa fa-play-circle'></span> WATCH TRAILER</button>
                        <button className='signin'>SIGN IN <span className='fa fa-pencil'></span></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movie;
