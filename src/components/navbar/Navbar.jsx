import styles from "./Navbar.module.css";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";

export default function Navbar({ position, homeRef, sobremiRef, articulosRef,contactoRef }) {
  //scroll to elemtnt div position
  const scrollToElement = (event) => {
    const clickedElement = event.target.id

    if(clickedElement === "home"){
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if(clickedElement === "sombremi"){
      sobremiRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if(clickedElement === "articulos"){
      articulosRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if(clickedElement === "contacto"){
      contactoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav className={styles.navContainer}>
      <div className={styles.leftSide}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <ul className={styles.listContainer}>
          <li>
         
            <a
            id="home"
              className={
                position < 81 && position >= -400 ? styles.active : styles.link
              }
               onClick={scrollToElement}
            >
              Home
            </a>
          </li>
          <li>
            <a 
            id="sombremi"
              className={
                position < -400 && position >= -950
                  ? styles.active
                  : styles.link
              }
              onClick={scrollToElement}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
            id="articulos"
              className={
                position < -950 && position >= -1370
                  ? styles.active
                  : styles.link
              }
               onClick={scrollToElement}
            >
              Mis artículos
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <SocialMediaBox />
        <a
        id="contacto"
          className={position < -1370 ? styles.activeBtn : styles.contactoBtn}
          onClick={scrollToElement}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
