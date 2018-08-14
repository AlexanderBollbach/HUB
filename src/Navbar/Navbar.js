import React from 'react'
import styles from './Navbar.css'
import { NavLink } from 'react-router-dom'

export default class Navbar extends React.Component {

  render( ) {
    return (
      <div className={styles.Navbar}>
          <NavLink className={styles.Default} exact activeClassName={styles.Active} to='/'>
            Home
          </NavLink>
      
          <NavLink className={styles.Default} activeClassName={styles.Active} to='/projects'>
            projects
          </NavLink>

          <NavLink className={styles.Default} activeClassName={styles.Active} to='/demos'>
            demos
          </NavLink>
      </div>
    )
  }
}

