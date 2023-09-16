import React from 'react';
import '../styles/Header.css';
import SearchBar from '../Components/searchBar';
import tv from '../Images/tv.png';
import Menu from '../Images/Menu.png';


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
                    <p><a href="">Sign in</a></p>
                    <img src={Menu} alt='SignInLogo' />
                 </div>
            </div>

        </div>
    );
}


export default Header;