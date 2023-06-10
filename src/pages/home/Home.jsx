import styles from "./Home.module.css";
import mainPhoto from "../../assets/photos/avatar.jpg";

export default function Home({ homeRef }) {
  return (
    <section className={styles.homeContainer} ref={homeRef}>
      <div className={styles.imgContainer}>
        <img
          className={styles.mainPhoto}
          src={mainPhoto}
          alt="jazmin osorio home"
        />
      </div>

      <div className={styles.textContent}>
        <a href="https://www.google.es/">google</a>
        <h1>Alimentación inteligente para una vida en equilibrio.</h1>
        <p>
          Mi PROPOSITO #1, es poder ayudarte a desarrollar un pensamiento
          crítico respecto a tu salud, aprendiendo acerca de suplementación y
          alimentos. Aquí podrás encontrar ANÁLISIS de suplementos,
          RECOMENDACIONES para elegir un buen suplemento, como vitaminas,
          minerales, proteínas, ...; CONOCIMIENTOS de super-alimentos para
          mantener y mejorar tu salud, y mucho más.
        </p>
      </div>
    </section>
  );
}
