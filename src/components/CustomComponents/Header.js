import React from 'react'
import styles from '../../stylesheets/CustomComponents.module.css'

const Header = ({ header }) => (
  <div className={styles.mainHeader}>
    <h3>{header}</h3>
  </div>
)

export default Header