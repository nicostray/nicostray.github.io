import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Drawer from './Drawer'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState()
  return (
    <div className={styles.navbar__container}>
        <nav className={styles.navbar}>
        <Link href="/"><a><h3 className={styles.navbar__logo}> &#60;NicolásCorrea /&#62;</h3></a></Link>

        <ul className={styles.navbar__links}>
            <li>
                <Link href="/#inicio" behavior={'smooth'}><a className={styles.navbar__link}>Inicio</a></Link>
            </li>
            <li>
                <Link href="/#acerca-de"><a className={styles.navbar__link}>Acerca de</a></Link>
            </li>
            <li>
                <Link href="/#proyectos"><a className={styles.navbar__link}>Proyectos</a></Link>
            </li>
        </ul>

        <button className={styles.navbar__menu} aria-label='desplegar menú' onClick={() => setToggleMenu(!toggleMenu)}>{toggleMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
    </nav>
    {toggleMenu && <Drawer setToggleMenu={setToggleMenu}/>}
    </div>
  )
}

export default Navbar