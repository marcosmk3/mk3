import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const footer = () => {
  function handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul>
          <li>
            <a href="#sobre" onClick={handleClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#catalogo" onClick={handleClick}>
              Catálogo
            </a>
          </li>
          {/* <li>
            <a href="#noticias" onClick={handleClick}>
              Últimas notícias
            </a>
          </li> */}
          <li>
            <a href="#faq" onClick={handleClick}>
              Perguntas Frequentes
            </a>
          </li>
          <li>
            <a href="#contato" onClick={handleClick}>
              Contato
            </a>
          </li>
        </ul>

        <div className={styles.footerLogo}>
          <p>
            {" "}
            <span className={styles.developer}>MK3</span> <br />
            Copyright 2021 - Direitos reservados - mk3 representações
          </p>
        </div>

        <p className={styles.nomeDev}>
          Desenvolvido por{" "}
          <a
            href="https://valdisnei.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={styles.developer}
          >
            Valdisnei Nilo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default footer;
