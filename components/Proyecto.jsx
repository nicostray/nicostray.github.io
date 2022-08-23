import React, { useState } from 'react'
import styles from '../styles/proyecto.module.css'
import DrawerProyecto from './DrawerProyecto';

const Proyecto = ({data}) => {
    const [toggleProyecto,setToggleProyecto] = useState(false);
    
    const toggleVentana = () => {
        setToggleProyecto(!toggleProyecto)
    }

    const estilos = {
        contenedor:{
            backgroundImage:`url(${data.image})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
        }
    }

  return (
    <div className={styles.proyecto__container} style={estilos.contenedor}>
        <div className={styles.proyecto__info} onClick={() => toggleVentana()}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className={styles.proyecto__titulo}>Ver proyecto</p>
        </div>

        {toggleProyecto && <DrawerProyecto data={data} toggleVentana={toggleVentana}/>}
    </div>
  )
}

export default Proyecto