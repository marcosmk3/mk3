import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/catalogo.module.css";

import Head from "next/head";
import Script from "next/script";

import Max from "../../../public/marcas/marca1.png";

const Maxprint = () => {
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

      <a data-toggle="modal" data-target=".bd-example-modal-xl4">
        <Image src={Max} alt="Seanit" />
      </a>

      <div
        className="modal fade bd-example-modal-xl4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className={styles.contOpcao}>
              <Link href={"/catalogos/maxprint.pdf"} passHref>
                <a target="_blank">
                  <li>
                    <div className={styles.opcaoCatalogo}>
                      <Image src={Max} alt="Maxprint" />
                      <p>Informática</p>
                    </div>
                  </li>
                </a>
              </Link>

              <Link
                href={
                  "https://drive.google.com/file/d/18smunUDEw5MQVSbP03I6xtEMdiIxN2Ah/view?usp=sharing"
                }
                passHref
              >
                <a target="_blank">
                  <li>
                    <div className={styles.opcaoCatalogo}>
                      <Image src={Max} alt="Maxprint" />
                      <p>Cadeiras office</p>
                    </div>
                  </li>
                </a>
              </Link>
              <li>
                <div className={styles.opcaoCatalogo}>
                  <Image src={Max} alt="dazz" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      width: "200px",
                    }}
                  >
                    <Link
                      href={
                        "https://drive.google.com/file/d/1TOn3CFdeYxzxl_aFpeCc_MVbVK8eMjvV/view?usp=sharing"
                      }
                      passHref
                    >
                      <a target="_blank">
                        <p>Dazz</p>
                      </a>
                    </Link>
                    <Link
                      href={
                        "https://drive.google.com/file/d/16M9pRh_X8AJILKqbouaeGOGBIfA7KwhW/view?usp=sharingf"
                      }
                      passHref
                    >
                      <a target="_blank">
                        <p>Cadeiras Marvel</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
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

export default Maxprint;
