import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const SlideDepoimento = () => {
  return (
    <section className={styles.depoimentos}>
      <div className="cont">
        <div className={styles.depimg}>
          <Image
            alt="mk3 representações"
            src="/depoimentos/foto2.png"
            width={80}
            height={80}
          />
        </div>
        <div>
          <span>&#10077;</span>
          <p className={styles.mensagem}>
            Gostaria de parabeniza-los pelo profissionalismo! Empresa séria e
            comprometida em atender bem seus clientes, estamos muito
            satisfeitos.
          </p>
          <p>- Mônica da Costa -</p>
          <div>
            <Image alt="vetor" src="/vetor.svg" width={33} height={33} />
          </div>
        </div>
      </div>
      <div className="cont">
        <div className={styles.depimg}>
          <Image
            alt="mk3 representações"
            src="/depoimentos/foto4.png"
            width={80}
            height={80}
          />
        </div>
        <div>
          <span>&#10077;</span>
          <p className={styles.mensagem}>
            Atendimento top, fazendo por merecer todo mérito que a marca MK3
            REPRESENTAÇÕES com muita competência conquistou; Parabéns a toda a
            equipe.
          </p>
          <p>- Douglas Mirante -</p>
          <div>
            <Image alt="vetor" src="/vetor.svg" width={33} height={33} />
          </div>
        </div>
      </div>
      <div className="cont">
        <div className={styles.depimg}>
          <Image
            alt="mk3 representações"
            src="/depoimentos/foto3.png"
            width={80}
            height={80}
          />
        </div>
        <div>
          <span>&#10077;</span>
          <p className={styles.mensagem}>
            Vocês são nota 10. Dentro do prazo que eu precisava e dentro de
            minhas expectativas. Essa parceria será de longa data com certeza.
          </p>
          <p>- Mariana Silva -</p>
          <div>
            <Image alt="vetor" src="/vetor.svg" width={33} height={33} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideDepoimento;
