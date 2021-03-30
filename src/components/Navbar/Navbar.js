import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLink}>
        <NavLink to="/todo-one">Todo One</NavLink>
      </div>
    </nav>
  );
};
