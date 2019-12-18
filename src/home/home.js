import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="main-home">
            <div className="list">
                <h1>Legal Advice</h1>
                <p> is an online legal services marketplace connecting consumers and lawyers from various law firms across the region.
                    Legal Advice is a technology company. We are not a law firm, and we neither give legal advice nor provide legal services.
                    All advice and services are provided by duly qualified and authorised participating lawyers.</p></div>
            <div className="list">
                <h1>What we do</h1>

                <li>Our platform is region-specific and supports the unique set of features, including</li>

                <li>multilingual support.</li>
                <li>anonymity for consumers.</li>
                <li>lawyers licensing check.</li>
                <li>two-level attorneys control system</li>
                <li>multiple channels for lawyer-consumer communication</li>
                <li>support for remote rendering of legal services</li>
                <li>local legal knowledge bas</li>
            </div>
        </div>
    )
};

export default Home; 