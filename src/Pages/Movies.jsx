import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer' ;
import Loader from '../Components/Loader';
import tv from '../Images/tv.png';
import '../styles/Movies.css';




function Movies() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1a4ffa1b8e0fa13200d8c8fde4042869&language=en-US&page1`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, []);

    




    return (
        <div className='MovieDetails'>
            <div className='sideBar'>
                <div className='sideTopBar'>
                    <img src={tv} alt="Icon Logo" style={{width: '28px'}} />
                    <p>MovieBox</p>
                </div>
                
                <div className='linkes'>
                    <Link className='linking'><span className='fa fa-home'></span> Home</Link>
                    <Link className='linking'><span className='fa fa-camera'></span> Movies</Link>
                    <Link className='linking'><span className='fa fa-television'></span> TV Series</Link>
                    <Link className='linking'><span className='fa fa-calendar-plus'></span> UpComing</Link>
                    <div className='extras'>
                        <p>Play movie quizes and earn free tickets</p>
                        <p>50k people are playing now</p>
                        <button style={{fontSize: '10px', padding: '5px', backgroundColor: 'rgb(247, 123, 123)', border: '1px solid white', color: 'white'}}>Start Playing</button>
                    </div>
                    <Link className='linking'><span className='fa fa-phone'></span> Contact</Link>
                    <Link className='linking'><span className='fa fa-newspaper'></span> About</Link>
                    <Link className='linking'><span className='fa fa-sign-out'></span> Log Out</Link>
                </div>
            </div>

            <div className='displayPage'>
                <div className='dispOne'>
                    { movie &&
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Poster Image" />
                }
                </div>
             
                { movie &&
                <div className='dispTwo'>
            
                    <h1 style={{color: 'rgb(180, 52, 52)'}} >{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                    <h3>{movie.runtime} Mins.</h3>
                    <h3> <span className='fa fa-star' style={{color: 'gold'}}></span> {movie.vote_average}</h3>
                </div>
                 }
          
                 { movie &&
                <div className='dispThree'>
                    <p style={{fontSize: 'large', fontWeight: '500'}}>{movie.overview}</p>
                </div>
                }

                <div className='dispFour'>
                    <button>Watch Trailer <span className='fa fa-play-circle'></span></button>
                    <Link><button>Download via Link <span className='fa fa-download'></span></button></Link>
                </div>

<hr />
                <div className='footer'>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Movies;