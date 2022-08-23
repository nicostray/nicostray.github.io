import Image from 'next/image'
import React from 'react'
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div id='inicio' className={styles.hero__container}>
       <h1>Nicolás Correa</h1>
       <div className={styles.hero__divider}></div>
       <p>Desarrollador Front-End</p>
    </div>
  )
}

export default Hero