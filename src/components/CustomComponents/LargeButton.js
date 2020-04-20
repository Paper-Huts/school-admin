import React from 'react'
import styles from '../../stylesheets/CustomComponents.module.css'
import { Link } from 'react-router-dom'

const LargeButton = ({ label }) => (
  <Link to={label.path} className={styles.links}>
    <div className={styles.largeButton}>
      {label.title}
    </div>
  </Link>
)

export default LargeButton