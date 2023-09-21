import React from 'react';
import '../styles/Header.css';
import SearchBar from '../Components/searchBar';
import tv from '../Images/tv.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


function Header(){   

    // The top of the Webpage

    return(
        <div className='head'>
            <div className='navigation'>
                <div className='movieLogo'>
                    <img src={tv} alt='SiteLogo' />
                    <p className='head-p'>MovieBox</p>
                </div>

            {/* Search Bar */}
                <div className='searchMe'>
                    <SearchBar />
                </div>
            {/* SignIn Options */}
                <div className='signInLogo'>
                    {/* <p><a href="">Sign in</a></p> */}
                    {/* <Link>Sign In</Link> */}
                    <button className='head-btn'>Sign up <span className='fa fa-user-circle'></span></button>
                 </div>
            </div>

        </div>
    );
}


export default Header;