import React from 'react'
import styles from '../../../stylesheets/CustomComponents.module.css'

const SubHeader = ({ subHeader }) => (
    <div className={styles.subHeader}>
        <h4>{subHeader}</h4>
    </div>
)

export default SubHeader