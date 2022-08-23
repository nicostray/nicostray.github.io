import React from 'react'
import styles from '../styles/drawerProyecto.module.css'
import placasTecnologias from '../placasTecnologias.json'

const DrawerProyecto = ({data, toggleVentana}) => {

  const cerrarVentana = (e) => {
    (e.target.id) === 'drawer__proyecto' && toggleVentana(false)
}

  return (
    <div id='drawer__proyecto' className={styles.drawerProyecto__fondo} onClick={() => cerrarVentana(event)}>
        <div className={styles.drawerProyecto__container}>

        <div className={styles.drawerProyecto__cerrar}>
            <button onClick={() => toggleVentana()} className={styles.drawerProyecto__buttonCerrar} ><i className="fa-solid fa-angle-right"></i></button>
        </div>
        
        <div className={styles.drawerProyecto__info}>
            <p className={styles.drawerProyecto__titulo}>{data.nombre}</p>

            <div className={styles.drawerProyecto__tecnologias}>
            {data.tecnologias.map(tecnologia => (placasTecnologias.map(placa => tecnologia===placa.nombre && <img key={placa.nombre} src={placa.link}/>)))}
            </div>

            <img className={styles.drawerProyecto__imagen} src={data.image} />

        
        <p className={styles.drawerProyecto__desc}>{data.descripcion}</p>

        <div className={styles.drawerProyecto__links}>
            <a className={styles.drawerProyecto__link} href={data.url} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i> Web</a>
            {data.source !== undefined && <a className={styles.drawerProyecto__link} href={data.source} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code"></i> Código</a>}
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default DrawerProyecto