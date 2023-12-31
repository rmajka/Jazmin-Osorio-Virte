import styles from "./SocialMediaBox.module.css";
import fb from "../../assets/logos/facebook.svg";
import insta from "../../assets/logos/insta.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import yt from "../../assets/logos/youtube.svg";

export default function SocialMediaBox() {
  return (
    <div className={styles.boxContainer}>
      <a
        className={styles.ytLink}
        href="https://www.youtube.com/@misvitaminas"
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.ytLogo} src={yt} alt="youtube jazmin osorio" />
      </a>
      <a
        className={styles.fbLink}
        href="https://www.facebook.com/profile.php?id=61551209313745"
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.fbLogo} src={fb} alt="facebook jazmin osorio" />
      </a>
      <a
        className={styles.instaLink}
        href="https://www.instagram.com/mis.vitaminas1/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.instaLogo}
          src={insta}
          alt="instagram jazmin osorio"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jazminosoriom/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.linkedinLogo}
          src={linkedin}
          alt="linkedin jazmin osorio"
        />
      </a>
    </div>
  );
}
