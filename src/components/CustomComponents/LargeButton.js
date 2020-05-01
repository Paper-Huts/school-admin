import React from 'react'
import styles from '../../stylesheets/CustomComponents.module.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const LargeButton = ({ label, path, searchParam, urlHash, state }) => (
  <Link to={{
    pathname: path,
    search: searchParam,
    hash: urlHash,
    state: state
  }} className={styles.links}>
    <Button variant='outline-secondary' className={styles.largeButton}>
      {label}
    </Button>
  </Link>
)

export default LargeButton