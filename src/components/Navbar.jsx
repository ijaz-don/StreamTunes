import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const New = () => {
  return (
    <div id='body'>
      <ul>
        <h3>react router</h3>
        <div id='uldiv'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/Blog">blog</Link></li>
        <li><Link to="/Contact">contact</Link></li>
        <li><Link to="/Layout">layout</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default New;
