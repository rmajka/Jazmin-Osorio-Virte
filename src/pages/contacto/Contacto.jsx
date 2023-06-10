import styles from "./Contacto.module.css";

export default function Contacto({contactoRef}) {
  return (
    <section className={styles.container} ref={contactoRef}>
      <h1>Contacto</h1>
      <p>
        ¡Gracias por visitar mi web! Si deseas contactarme para colaboraciones,
        consultas o cualquier otra pregunta, no dudes en enviarme un email a:
        <br />
        <br />
        <b>jazminosoriom@gmail.com</b>
        <br />
        <br />
      </p>
      <p>¡Un abrazo!</p>
    </section>
  );
}
