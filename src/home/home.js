import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return(
  <div className="main-home">
      <div className="list">
          <h1>Legal Advice</h1>
          <p> An online legal services marketplace connecting consumers and lawyers from various law firms across the region. Legal Advice is a technology company. We are not a law firm, and we neither give legal advice nor provide legal services. All advice and services are provided by duly qualified and authorised participating lawyers.</p>
          

 <h1>How Does it Work?</h1>
<p><li>The online lawyer consultation is a two step process:</li>
<li>Step 1. Describe Your Case</li>
You first select the category of law you are interested in your location and then write a brief description of your situation.

<li>Step 2. Choose Your Lawyers and tell them how to contact you</li>
A list of the best lawyers for your case will be shown. Usually, it's best to leave them all selected, as this will give you the best chance of solving your problem quickly.

After that, simply enter in the best way for the lawyer to contact you. A cell phone or home phone is fine, and email address that you check regularly, so that you can be reached easlily.
</p>
          
          </div>      
        <div className="list">
<h1>What we do</h1>

<li>Our platform is region-specific and supports the unique set of features, including</li>

<li>multilingual support.</li>
<li>anonymity for consumers.</li>
<li>lawyers licensing check.</li>
<li>two-level attorneys control system</li>
<li>multiple channels for lawyer-consumer communication</li>
<li>support for remote rendering of legal services</li>
<li>local legal knowledge base</li>


</div>
</div>   
    )
};

export default Home; 