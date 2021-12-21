import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Catalogo = () => {
  return (
    <section className={styles.catalogo + " cont"} id="catalogo">
      <h2 className="titulo">Catálogo</h2>
      <h3>Mais de 3 mil itens disponíveis</h3>
      <p>
        Trabalhamos apenas com produtos exclusivos para atendermos sempre de
        forma diferenciada, moderna e de qualidade, confira os nossos produtos
        para o ramo de Papelaria e Informática.
      </p>
      <div>
        <div>
          <p>Papelaria</p>
          <Image
            alt="catálogo papelaria"
            src="/catalogoPapelaria.png"
            width={592}
            height={191}
          />
          <ul className={styles.catPapelaria}>
            <div>
              <Link href={"/catalogos/acrimet.pdf"} passHref>
                <a target="_blank">
                  <li>Acrimet</li>
                </a>
              </Link>
              <Link href={"/catalogos/acp.pdf"} passHref>
                <a target="_blank">
                  <li>ACP</li>
                </a>
              </Link>
              <Link href={"/catalogos/adere.pdf"} passHref>
                <a target="_blank">
                  <li>Adere</li>
                </a>
              </Link>
            </div>

            <div>
              <Link href={"/catalogos/bacchi.pdf"} passHref>
                <a target="_blank">
                  <li>Bacchi</li>
                </a>
              </Link>
              <Link href={"/catalogos/compactor.pdf"} passHref>
                <a target="_blank">
                  <li>Compactor</li>
                </a>
              </Link>
              <Link href={"/catalogos/mercur.pdf"} passHref>
                <a target="_blank">
                  <li>Mercur</li>
                </a>
              </Link>
            </div>

            <div>
              <Link href={"/catalogos/offpaper.pdf"} passHref>
                <a target="_blank">
                  <li>Off Paper</li>
                </a>
              </Link>
              <Link href={"/catalogos/seanit.pdf"} passHref>
                <a target="_blank">
                  <li>Seanit</li>
                </a>
              </Link>
              <Link href={"/catalogos/seanit_malas_camping.pdf"} passHref>
                <a target="_blank">
                  <li>Seanit Malas e Camping</li>
                </a>
              </Link>
            </div>

            <div>
              <Link href={"/catalogos/sd_cadernos.pdf"} passHref>
                <a target="_blank">
                  <li>São Dom. Cadernos</li>
                </a>
              </Link>
              <Link href={"/catalogos/sd_impressos.pdf"} passHref>
                <a target="_blank">
                  <li>São Dom. Impressos</li>
                </a>
              </Link>
              <Link href={"/catalogos/sd_planners_agendas.pdf"} passHref>
                <a target="_blank">
                  <li>São Dom. Planners e Agendas</li>
                </a>
              </Link>
            </div>
          </ul>
        </div>

        <div className={styles.catalogoInformatica}>
          <p>Informática</p>
          <Image
            alt="catálogo informática"
            src="/catalagoInformatica.png"
            width={592}
            height={191}
          />
          <ul>
            <Link href={"/catalogos/maxprint.pdf"} passHref>
              <a target="_blank">
                <li>MaxPrint</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
