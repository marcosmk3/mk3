import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Noticias = () => {
  return (
    <section className={styles.noticias + " cont"} id="noticias">
      <h2 className="titulo">Últimas notícias</h2>
      <article>
        <div>
          <div>
            <Image
              alt="/"
              src="/excluir/novapasta.png"
              width={300}
              height={300}
            />
          </div>
          <h1>Mensagem da MK3 representações</h1>
          <p>
            Mensagem da mk3 representações,Mensagem da mk3 representações
            Mensagem da mk3 representações.
          </p>
        </div>
        <div>
          <div>
            <Image
              alt="/"
              src="/excluir/novapasta.png"
              width={300}
              height={300}
            />
          </div>
          <h1>Mensagem da MK3 representações</h1>
          <p>
            Mensagem da mk3 representações,Mensagem da mk3 representações
            Mensagem da mk3 representações.
          </p>
        </div>
        <div>
          <div>
            <Image
              alt="/"
              src="/excluir/novapasta.png"
              width={300}
              height={300}
            />
          </div>
          <h1>Mensagem da MK3 representações</h1>
          <p>
            Mensagem da mk3 representações,Mensagem da mk3 representações
            Mensagem da mk3 representações.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Noticias;
