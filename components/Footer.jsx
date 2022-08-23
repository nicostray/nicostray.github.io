import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <p className={styles.footer__descripcion}>Si estás interesado/a en mi perfil, no dudes en contactarme.</p>
      <a href="mailto:nicolascorrea.dev@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.footer__contactar}>Contactar </a>

      <div className={styles.footer__rrss}>
        <a href="https://www.linkedin.com/in/nicolascorrea-dev/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/nicostray" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  )
}

export default Footer