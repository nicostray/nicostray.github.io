import React, { useEffect, useRef, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import styles from '../styles/tecnologia.module.css'

const Tecnologia = ({data}) => {

  const [isMounted,setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
},[]);

  return (
        <div className={styles.tecnologia}>
          <img data-tip data-for={`tecnoTooltip-${data.nombre}`} src={data.link} alt={`imagen de ${data.nombre}`}/>
          {isMounted && 
          <ReactTooltip id={`tecnoTooltip-${data.nombre}`} type='dark'>
            {data.nombre}
          </ReactTooltip>}
          
        </div>
  )
}

export default Tecnologia