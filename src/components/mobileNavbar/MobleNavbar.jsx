import styles from "./MobleNavbar.module.css";
import { useState } from "react";
import SocialMediaBox from "../socialmediabox/SocialMediaBox";
import Hamburger from "../hamburger/Hamburger";

export default function MobleNavbar({ position, homeRef, sobremiRef, articulosRef,contactoRef }) {
  const [open, setOpen] = useState(false);

    //scroll to elemtnt div position
  const scrollToElement = (event) => {
    const clickedElement = event.target.id
    //close menu
    setOpen(false)
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
    <>
      <nav className={styles.navContainer}>
        <h4 className={styles.name}>Jazmin Osorio</h4>
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
      <div className={open ? styles.menuOpen : styles.menu}>
        <ul className={styles.listContainer}>
          <li>
            
            <a
            id="home"
              className={
                position < 81 && position >= -420
                  ? styles.linkActive
                  : styles.link
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
                position < -420 && position >= -1750
                  ? styles.linkActive
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
                position < -1750 && position >= -3000
                  ? styles.linkActive
                  : styles.link
              }
            
              onClick={scrollToElement}
            >
              Mis artículos
            </a>
          </li>
          <li>
            <a
            id="contacto"
              className={position < -3000 ? styles.linkActive : styles.link}
               onClick={scrollToElement}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className={styles.socialBox}>
          <SocialMediaBox />
        </div>
      </div>
    </>
  );
}
