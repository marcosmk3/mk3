import React from "react";
import styles from "../../styles/Home.module.css";

const Introducao = () => {
  return (
    <section className="cont">
      <div className={styles.introducao}>
        <div>
          <span>+200</span>
          <p>Cidades Atendidas</p>
        </div>
        <div>
          <span>+20</span>
          <p>Anos de Experiência</p>
        </div>
        <div>
          <span>+3K</span>
          <p>Itens Disponíveis</p>
        </div>
        <div>
          <span>100%</span>
          <p>Clientes Satisfeitos</p>
        </div>
      </div>
    </section>
  );
};

export default Introducao;
