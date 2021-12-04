import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css';
import bannerImage from './images/img-1.jpg'


const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/public/tools.JSON")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    const bannerText = {
        color: "white",
        fontSize: "4em",
    }
    return (
        <div >
            {/* <h2>this is home</h2> */}
            <div className="bannerDoc">
                <div className="container d-flex justify-content-start align-items-center h-100">
                    <div className="w-25">
                        <h1 style={bannerText}>A Leading Light in <span style={{ color: "#A52A2A" }}>Healthcare</span></h1>
                    </div>
                </div>
            </div>

            <div id="About" className="container my-5  ">
                <About></About>
            </div>
            <div id="Services" className="container my-5">
                <Services></Services>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;