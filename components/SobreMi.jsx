import React from 'react'
import styles from '../styles/sobreMi.module.css'
import Tecnologia from './Tecnologia'
import imagenesTecnologias from '../imagenesTecnologias.json'

const SobreMi = () => {
  return (
    <div className={styles.sobreMi__container}>
        <div className={styles.sobreMi__info}>
            <h2>Sobre mi</h2>
            <p>Tengo 24 años, desarrollo principalmente en React/NextJs, pero tengo conocimientos 
                sobre backend y aspiro a ser fullstack en un futuro cercano. 
                Disfruto aprender cosas nuevas y compartir ideas con más personas.
            </p>
                <br />
            <p>Te invito a revisar mis proyectos y a ponerte en contacto conmigo
                si es que te ha interesado mi perfil y deseas que trabajemos juntos.
            </p>
        </div>

        <div className={styles.sobreMi__tecnologias}>
            <h2>Tecnologías que utilizo</h2>
            <div className={styles.sobreMi__tecnologiasImgContainer}>
                {imagenesTecnologias.map(imagen => <Tecnologia key={imagen.nombre} data={imagen} />)}
            </div>
        </div>
        <div id='acerca-de' style={{position:'absolute',top:'-75px'}}></div>
    </div>
  )
}

export default SobreMi