import React from 'react'
import styles from '../../stylesheets/CustomComponents.module.css'

const MiniHeader = ({ title }) => (
  <div className={styles.miniHeader}>
    <h3>{title}</h3>
  </div>
)

export default MiniHeader