import React from "react";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import Countries from "../Components/Countries";

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <Logo />
            <Countries />
            <h1>Accueil</h1>
        </div>
    )
}
export default Home;