import React from 'react'
import styles from '../styles/proyectos.module.css'
import Proyecto from './Proyecto'
import listadoProyectos from '../proyectos.json'

const Proyectos = () => {
  return (
    <div className={styles.proyectos__container}>
      <div id='proyectos' style={{position:'absolute',top:'-75px'}}></div>
        <h2>Proyectos realizados</h2>
        <p className={styles.proyectos__descrip}>Cada uno ha sido diseñado y desarrollado completamente por mi, no pertenecen a ningún curso.</p>
        <div className={styles.proyectos__contenedorDeProyectos}>
          {listadoProyectos.map(element => <Proyecto key={element.nombre} data={element} />)}
        </div>
        
    </div>
  )
}

export default Proyectos