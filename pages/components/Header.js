import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import Catalogo from "./Catalogo"


const header = () => {
  function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    menuButton.classList.toggle("activo");
    const menuList = document.querySelector('[data-menu="list"]');
    menuList.classList.toggle("menuDisplay");
  }

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
    <herder className={styles.header}>
      <div className={styles.headerInfo}>
        <div className={styles.headerContainer}>
          <ul>
            <li>Segunda a Sexta | 08:00 as 18:00.</li>
            <li>
              <a
                className={styles.headerLi}
                href="mailto:contato@mk3representacoes.com.br"
              >
                contato@mk3representacoes.com.br
              </a>
            </li>
            <li>
              <a className={styles.headerLi} href="tel:06334125519">
                +55 (63) 3412-5519{" "}
              </a>
            </li>

            <li>
              <div className={styles.headerRedes}>
                <div className={styles.headerWhatsapp}>
                  <Link
                    href="https://api.whatsapp.com/send?phone=556334125519&text=Ol%C3%A1%2C%20preciso%20falar%20com%20um%20representante%20comercial"
                    passHref
                  >
                    <a target="_blank" rel="noreferrer">
                      <Image
                        src="/icons/whatsapp.png"
                        alt="whatsapp mk3 representações"
                        width={22}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://www.instagram.com/mk3representacoes/"
                    target="_blank"
                    rel="noreferrer"
                    passHref
                  >
                    <a target="_blank" rel="noreferrer">
                      <Image
                        src="/icons/instagram-branco.png"
                        alt="instagram mk3 representações"
                        width={17}
                        height={15}
                      />
                    </a>
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://pt-br.facebook.com/MK3-Representa%C3%A7%C3%B5es-1813267405628032/"
                    target="_blank"
                    rel="noreferrer"
                    passHref
                  >
                    <a target="_blank" rel="noreferrer" >
                      <Image
                        src="/icons/facebook-branco.png"
                        alt="facebook mk3 representações"
                        width={17}
                        height={15}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.headerNav}>
        <div className={styles.headerContainerNav}>
          <span onClick={initMenuMobile}>
            <nav data-menu="button" className={styles.menuButton}></nav>
          </span>

          <div className={styles.logo}>
            <Image
              src="/logo.jpg"
              alt="logo mk3 representações"
              width={70}
              height={50}
            />
          </div>

          <div className={styles.menu} data-menu="list">
            <div>
              <a href="#sobre" onClick={handleClick}>
                Sobre nós
              </a>
            </div>
            <div>
              <a href="#" >
                {/* <Catalogo /> */}
              </a>
            </div>

            {/* <div>
              <a href="#noticias" onClick={handleClick}>
                Últimas notícias
              </a>
            </div> */}
            <div>
              <a href="#faq" onClick={handleClick}>
                Perguntas Frenquentes
              </a>
            </div>
            <div>
              <a href="#contato" onClick={handleClick}>
                Contato
              </a>
            </div>
          </div>

          <div className={styles.portais}>
            
            <Catalogo />

            <Modal />
            <a
              href="https://mk3.suasvendas.com/#services"
              target="_blank"
              className={styles.buttonPortal}
              rel="noreferrer"
            >
              Portal do cliente
              <span>
                <Image src="/seta.svg" alt="mk3" width={20} height={10} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </herder>
  );
};

export default header;
