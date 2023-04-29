import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
             <h2>conditions</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet veritatis pariatur animi minima iusto nulla molestias odio explicabo quod!</p>
             <p>go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;