import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.css';

const Landing = () => {
  return (
    <div className={styles.Landing}>
      <h1>Welcome to Markdownly</h1>

      <img src='https://memegenerator.net/img/instances/54480478.jpg' />

      <h2>
        <Link to='/markdown'>
          Use Markdown
        </Link>
        <br/>
        <br/>
        <Link to='/about'>
          About
        </Link>
      </h2>
    </div>
  );
};

export default Landing;
