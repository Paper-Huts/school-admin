import React from 'react'
import styles from '../../stylesheets/CustomComponents.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const LargeButton = ({ label }) => (
  <Link to={label.path} className={styles.links}>
    <Button variant='outline-secondary' className={styles.largeButton}>
      {label.title}
    </Button>
  </Link>
)

export default LargeButton