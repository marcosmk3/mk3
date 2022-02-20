import React from "react";
import styles from "../../styles/Home.module.css";

const Sobre = () => {
  return (
    <section className={styles.sobre + " cont"} id="sobre">
      <h2 className="titulo">Sobre nós</h2>
      <h3>
        Representação no segmento de <span>Papelaria e Informática</span> a mais
        de 20 anos
      </h3>
      <p>
        MK3 é uma empresa de representação comercial que atua no ramo de
        Papelaria e Informática. Com sede localizada em Araguaína - TO, atendemos
        todo o estado do Tocantins e região sul do estado do Pará.
      </p>
    </section>
  );
};

export default Sobre;
