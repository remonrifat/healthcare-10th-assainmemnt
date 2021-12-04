import React from 'react';
import "./About.css";
import preview from "../../assets/preview.jpg"

const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col d-flex flex-column text-center align-items-center">
                    <h1 style={{ color: "#A52A2A" }}>About Us</h1>
                    <p style={{ color: "gray" }}>The Thai name Bumrungrad (pronounced bahm-roong-RAHT) means “care for the people,” and no phrase could more aptly describe this Bangkok hospital and clinic complex, the largest medical facility in Southeast Asia. More than a million inpatients and outpatients seek healthcare at Bumrungrad International Hospital annually. Some 40 percent of them are expatriates, tourists, or medical travelers from 190 different countries who go to Bumrungrad because of its reputation for high-quality care at exceptionally reasonable prices. At Bumrungrad, patients find short waiting times, excellent services, and medical specialties ranging from wellness checkups to heart transplants. It’s no surprise that Bumrungrad, one of the world’s top medical travel destinations, is also a benchmark for excellence in international healthcare.</p>
                </div>
                <div className="col d-flex justify-content-center">
                    <img width="600px" src={preview} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;