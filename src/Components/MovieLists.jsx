import React, { useEffect, useState } from 'react';
import '../styles/MovieLists.css';
import '@fortawesome/fontawesome-free/css/all.css';
import tomato from '../Images/tomato.png';
import imdb from '../Images/imdb.png';

import { Link } from 'react-router-dom';

const MovieLists = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1a4ffa1b8e0fa13200d8c8fde4042869&language=en-US&page1")
        .then(res => res.json())
        .then(data => setMovieList(data.results.slice(0, 12)));
    }, []);

    return(
        <div className="contents">
            <div className="checkIt">
                <p>Featured Movies</p>
                <p>See more <span className="fa fa-caret-right"></span></p>
            </div>

            <div className='movieList'>
                { movieList.map((movie) => (
                   <Link className='card' key={movie.id} to={`/movies/${movie.id}`}>
                   <img className='w-full object-cover' style={{width: '18rem'}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                   <div className='card-body'>
                       <p>Released Date:{movie.release_date}</p>
                       <h2>{movie.original_title}</h2>
                       <div className='rating'>
                            <div className='imdb'>
                                <img src={imdb} alt='imdb-img' />
                                <p>{movie.vote_average}/10</p>                                
                            </div>
                            <div className='tomatoes'>
                                <img src={tomato} alt='tomato-img' />
                                <p >{movie.vote_count}</p>
                            </div>
                        </div>
                   </div>
               </Link>
                )) 
                }
            </div>
        </div>    
    )
}

export default MovieLists;