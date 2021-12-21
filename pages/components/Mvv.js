import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Mvv = () => {
  return (
    <section className={styles.mvv + " cont"}>
      <div>
        <div>
          <Image alt="missão" src="/missao.png" width={50} height={50} />
          <span>Missão</span>
        </div>
        <p>
          Prestar serviços de excelência, atendendo as necessidades dos nossos
          clientes, com qualidade, confiabilidade e agilidade buscando construir
          parcerias sólidas.
        </p>
      </div>
      <div>
        <div>
          <Image alt="visão" src="/visao.png" width={50} height={50} />
          <span>Visão</span>
        </div>
        <p>
          Ser referência em representação comercial na região norte oferecendo
          as melhores marcas e serviços para nossos clientes com processos de
          melhoria continua.
        </p>
      </div>
      <div>
        <div>
          <Image alt="valores" src="/valores.png" width={50} height={50} />
          <span>Valores</span>
        </div>
        <p>
          Comprometimento; trabalho em equipe; respeito às parcerias; foco em
          resultados; valorização das pessoas.
        </p>
      </div>
    </section>
  );
};

export default Mvv;
