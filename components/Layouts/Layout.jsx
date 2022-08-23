import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Hero from '../Hero'
import Navbar from '../Navbar'
import styles from '../../styles/layout.module.css'
import Contacto from '../Contacto'

const Layout = ({children, title, description, hero}) => {

  return (
    <div className={styles.layout__container}>
      <Head>
      <title>{title}</title>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>
            <meta name="author" content='Nicolás Correa'/>
            <meta name='keywords' content='portafolio, desarrollador front-end, desarrollador molina, frontend chile'/>

            <meta property="og:image" content="https://i.imgur.com/0GYyCsG.png" />
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
      </Head>
    
      <Navbar />
      {hero ? <Hero /> : null}

      <Contacto />
      
      <main className={styles.layout__contenido}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Nicolás Correa - Portafolio de diseño y desarrollo web',
  description: 'Desarrollador Front-End. Aquí recopilo proyectos realizados completamente por mi.',
  hero: true,
}

export default Layout