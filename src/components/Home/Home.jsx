import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Home;