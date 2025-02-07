import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;