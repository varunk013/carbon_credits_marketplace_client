// Homepage.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage_container}>
      <div className={styles.homepage_content}>
        <h1>Welcome to Homepage</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login" className={styles.nav_link}>Login</Link>
            </li>
            <li>
              <Link to="/signup" className={styles.nav_link}>Signup</Link>
            </li>
            <li>
              <Link to="/dashboard" className={styles.nav_link}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Homepage;
