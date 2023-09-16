import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import tv from '../Images/tv.png';
import '../styles/Sidebar.css';

function Sidebar (){
    return (
        <div className='sideBar'>
            <div className='sideLogo'>
                <img src={tv} alt="Side Logo" />
                <p style={{fontSize: '25px', fontWeight: '600'}}>MovieBox</p>
            </div>
           <div className='nav'>
                <a href=""><span className='fa fa-home'></span>Home</a>
                <a href="" className='active'><span className='fa fa-camera'></span>Movies</a>
                <a href=""><span className='fa fa-television'></span>TV Series</a>
                <a href=""><span className='fa fa-calendar'></span>Upcoming</a>
                <div className='extras'>
                    <p>Play movie quizes and earn free tickets </p>
                    <p>50k people are playing now</p>
                    <button>Start Playing</button>
                </div>
                <a href=""><span className='fa fa-sign-out'></span>Log Out</a>
           </div>
        </div>
    )
}


export default Sidebar;