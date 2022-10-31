import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/catalogo.module.css";

import Head from "next/head";
import Script from "next/script";

import SD from "../../../public/marcas/marca8.png";

const SaoDomingos = () => {
  return (
    <section>
      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>

      <a data-toggle="modal" data-target=".bd-example-modal-xl3">
        <Image src={SD} alt="Seanit" />
      </a>

      <div
        className="modal fade bd-example-modal-xl3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className={styles.contOpcao}>
              {/* CADERNOS */}
              <Link href={"/catalogos/SAO-DOMINGOS/sd_cadernos.pdf"} passHref>
                <a target="_blank">
                  <li>
                    <div className={styles.opcaoCatalogo}>
                      <Image src={SD} alt="São Domingos Cadernos" />
                      <p>Cadernos</p>
                    </div>
                  </li>
                </a>
              </Link>

              {/* IMPRESSOS */}
              <Link href={"/catalogos/SAO-DOMINGOS/sd_impressos.pdf"} passHref>
                <a target="_blank">
                  <li>
                    <div className={styles.opcaoCatalogo}>
                      <Image src={SD} alt="São Domingos Impressos" />
                      <p>Impressos</p>
                    </div>
                  </li>
                </a>
              </Link>

              {/* PLANNERS E AGENDAS */}
              <Link
                href={"/catalogos/SAO-DOMINGOS/sd_planners_agendas.pdf"}
                passHref
              >
                <a target="_blank">
                  <li>
                    <div className={styles.opcaoCatalogo}>
                      <Image src={SD} alt="São Domingos Planners e agendas" />
                      <p>Planners e Agendas</p>
                    </div>
                  </li>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />

      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
        strategy="beforeInteractive"
      />
    </section>
  );
};

export default SaoDomingos;
