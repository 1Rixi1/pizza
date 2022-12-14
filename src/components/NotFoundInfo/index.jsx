import React from 'react'

import styles from './NotFoundInfo.module.scss'


export const NotFoundInfo = () => {
  return (
    <div className={styles.root}>
      <h1 >
        <span>😕</span>
        <br />Ничего не найдено
      </h1>
      <p className={styles.description}>К сожелению, страница остутствует</p>
    </div>
  )
}


export default NotFoundInfo;
