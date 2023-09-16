import React from 'react';
import '../styles/Header.css';
import SearchBar from '../Components/searchBar';
import tv from '../Images/tv.png';
import Menu from '../Images/Menu.png';


function Header(){   

    return(
        <div className='head'>
            <div className='navigation'>
                <div className='movieLogo'>
                    <img src={tv} alt='SiteLogo' />
                    <p className='head-p'>MovieBox</p>
                </div>

                <div className='searchMe'>
                    <SearchBar />
                </div>

                <div className='signInLogo'>
                    <p><a href="">Sign in</a></p>
                    <img src={Menu} alt='SignInLogo' />
                 </div>
            </div>

        </div>
    );
}


export default Header;