import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Representadas = () => {
  return (
    <section className={styles.representadas + " cont"} id="representadas">
      <h2 className="titulo">Representadas</h2>
      <h3>As melhores marcas em um só lugar</h3>
      <div>
        <div>
          <Image
            alt="maxprint"
            src="/marcas/marca1.png"
            width={145}
            height={31}
          />

          <Image
            alt="off paper"
            src="/marcas/marca2.png"
            width={162}
            height={81}
          />

          <Image
            alt="compactor"
            src="/marcas/marca3.png"
            width={162}
            height={50}
          />

          <Image
            alt="seanit"
            src="/marcas/marca4.png"
            width={149}
            height={126}
          />
        </div>
        <div>
          <Image
            alt="mercur"
            src="/marcas/marca5.png"
            width={164}
            height={63}
          />

          <Image
            alt="bacchi"
            src="/marcas/marca6.png"
            width={162}
            height={45}
          />

          <Image alt="ACP" src="/marcas/marca7.png" width={108} height={45} />

          <Image
            alt="sao domingos"
            src="/marcas/marca8.png"
            width={162}
            height={48}
          />
        </div>
      </div>
    </section>
  );
};

export default Representadas;
