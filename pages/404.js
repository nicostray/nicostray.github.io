import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layouts/Layout'
import styles from '../styles/404.module.css'
import Navbar from '../components/Navbar'

const error = () => {
  return (
        <div>
            <Navbar />
                <div className={styles.error__container}>
                    <img src='/image-404.webp' alt='imagen de marvin'></img>
                    <div>
                        <h2>Error 404</h2>
                        <p>La página solicitada no existe</p>
                        <Link href='/'><a className={styles.error__button}>Ir a inicio</a></Link>
                    </div>
                </div>
        </div>
  )
}

export default error