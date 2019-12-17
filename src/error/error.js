import React from 'react';
import { Link } from 'react-router-dom';

const Errors = (props) => {
    return(
        <div className="alert alert-warning">
        Getting Lost ?
        <br></br>
        <Link to='/'>Return To Home Page</Link>
        </div>
    );
}

export default Errors;