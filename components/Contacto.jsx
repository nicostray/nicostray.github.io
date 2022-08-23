import React from 'react'
import styles from '../styles/contacto.module.css'

const Contacto = () => {
  return (
    <div className={styles.contacto__container}>
        <a href="https://www.linkedin.com/in/nicolascorrea-dev/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="mailto:nicolascorrea.dev@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
        <a href="https://github.com/nicostray" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> </a>
    </div>
  )
}

export default Contacto