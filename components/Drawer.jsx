import React from 'react'
import styles from '../styles/drawer.module.css'
import Link from 'next/link'
const Drawer = ({setToggleMenu}) => {

    const cerrarVentana = (e) => {
        (e.target.id) === 'drawer' && setToggleMenu(false)
    }


  return (
    <div id='drawer' className={styles.drawer__container} onClick={(event) => cerrarVentana(event)}>
        <nav>
            <p className={styles.drawer__titulo}>Menú</p>

            <ul className={styles.drawer__menuLinks}>
                
                <li>
                    <Link href="/#inicio"><a className={styles.drawer__link}>Inicio</a></Link>
                </li>
                <li>
                    <Link href="/#acerca-de"><a className={styles.drawer__link}>Acerca de</a></Link>
                </li>
                <li>
                    <Link href="/#proyectos"><a className={styles.drawer__link}>Proyectos</a></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Drawer