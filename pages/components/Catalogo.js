import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/catalogo.module.css";

import Head from "next/head";
import Script from "next/script";

import MaxPrint from '../../public/marcas/marca1.png'
import Off_Paper from '../../public/marcas/marca2.png'
import Compactor from '../../public/marcas/marca3.png'
import Seanit from '../../public/marcas/marca4.png'
import Mercur from '../../public/marcas/marca5.png'
import Bacchi from '../../public/marcas/marca6.png'
import ACP from '../../public/marcas/marca7.png'
import SD from '../../public/marcas/marca8.png'
import Adere from '../../public/marcas/adere.png'
import Acrimet from '../../public/marcas/acrimet.png'
import riobranco from '../../public/marcas/riobranco.png'

const Catalogo = () => {
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

      <a  data-toggle="modal" data-target=".bd-example-modal-xl" >Catálogos</a>

      <div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
          <div className={styles.catalogoCont}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
                style={{position: "absolute", right: "30px", top: "30px"}}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>Mais de 3 mil itens disponíveis</h3>
              <p>
                Trabalhamos apenas com produtos exclusivos para atendermos sempre de
                forma diferenciada, moderna e de qualidade, confira os nossos produtos
                para o ramo de Papelaria e Informática.
              </p>
            
              <div className={styles.catPapelaria}>
                <div className={styles.titulo}>Papelaria</div>
                
                <ul >
                  
                  <Link href={"/catalogos/acrimet.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Acrimet} alt='Acrimet'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/acp.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={ACP} alt='ACP'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/adere.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Adere} alt='Adere'/></li>
                    </a>
                  </Link>

                  <Link href={"/catalogos/bacchi.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Bacchi} alt='Bacchi'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/compactor.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Compactor} alt='Compactor'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/mercur.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Mercur} alt='Mercur'/></li>
                    </a>
                  </Link>

                  <Link href={"/catalogos/offpaper.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Off_Paper} alt='Off Paper'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/seanit.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Seanit} alt='Seanit'/></li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/seanit_malas_camping.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={Seanit} alt='Seanit'/> Malas</li>
                    </a>
                  </Link>

                  <Link href={"/catalogos/sd_cadernos.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={SD} alt='São Domingos Cadernos'/> Cadernos</li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/sd_impressos.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={SD} alt='São Domingos Impressos'/> Impressos</li>
                    </a>
                  </Link>
                  <Link href={"/catalogos/sd_planners_agendas.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={SD} alt='São Domingos Planners e agendas'/> Agendas</li>
                    </a>
                  </Link>
                </ul>
              </div>

              <div className={styles.catPapelaria}>
                <div className={styles.titulo}>Informática</div>
                
                <ul>
                  <Link href={"/catalogos/maxprint.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={MaxPrint} alt='Maxprint'/></li>
                    </a>
                  </Link>

                  <Link href={"/catalogos/riobranco.pdf"} passHref>
                    <a target="_blank">
                      <li><Image src={riobranco} alt='Rio Branco'/></li>
                    </a>
                  </Link>
                </ul>
              </div>
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

export default Catalogo;
