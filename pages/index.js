import Layout from "../components/Layouts/Layout";
import Proyectos from "../components/Proyectos";
import SobreMi from "../components/SobreMi";
import styles from '../styles/index.module.css'

export default function Home() {
  return (
   <Layout className={styles.index}>
        <SobreMi />
        <div className={styles.index__divider}></div>
        <Proyectos />    
   </Layout>
  )
}
