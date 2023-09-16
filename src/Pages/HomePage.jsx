import React from "react";
import Header from "../Components/Header";
import Movie from '../Components/practice';
import MovieLists from "../Components/MovieLists";
import Footer from "../Components/Footer";

function HomePage({movieList}){

    console.log(movieList)
    return(
        <div className="">
            <Header />
            <Movie />
            <MovieLists />
            <Footer />
        </div>
    )
}

export default HomePage;