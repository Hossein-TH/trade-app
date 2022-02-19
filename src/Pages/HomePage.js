import React from 'react';
import Header from "../Components/Home/Header Folder/Header";
import Services from "../Components/Home/Services Folder/Services";
import Presentation from "../Components/Home/Presentation Folder/Presentation";
import Pricing from "../Components/Home/Pricing/Pricing";
import Blog from "../Components/Home/Blog Folder/Blog";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const HomePage = () => {
    return (
        <div style={{background: "#191b2d"}}>
            <Navbar/>
            <Header/>
            <Services/>
            <Presentation/>
            <Pricing/>
            <Blog/>
            <Footer color="#191b2d"/>
        </div>
    );
};

export default HomePage;
