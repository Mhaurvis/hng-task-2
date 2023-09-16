import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Movies.css';
import Rect from '../Images/Rect.png';

import { useParams } from 'react-router-dom';




function Movies() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1a4ffa1b8e0fa13200d8c8fde4042869&language=en-US&page1`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);




    return (
        <div className='detMovies'>
            <Sidebar />

            <div className='yello'>
               { movie && 
               <img className='divImg' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                }
                 
                { movie && 
                <div className='api-stats'><h2>{movie.title}    .  {movie.release_date}   .   {movie.runtime}Mins </h2></div>
                }

                { movie && 
                <div className='movieOverview'>{movie.overview}</div>
                }

                <div className='butts'>
                    <button className='butt1'><span className='fa fa-link'></span> See Showtimes</button>
                    <button className='butt2'><span className='fa fa-list'></span> Watch More Options</button>
                    <img style={{width: '70%', height: '200px'}} src={Rect} alt="" />
                </div>

                <div>5</div>
            </div>
            {/* {!movie && <Loader />}
            {!movie && <h1>Loading...</h1>}
            { movie && <h1>{movie.overview}</h1>} */}
        </div>
    )
}

export default Movies;