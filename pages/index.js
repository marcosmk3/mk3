import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import Header from "./components/Header";
import Introducao from "./components/Introducao";
import Sobre from "./components/Sobre";
import Mvv from "./components/Mvv";
import Catalogo from "./components/Catalogo";
import Representadas from "./components/Representadas";
// import Noticias from './components/Noticias'
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Depoimento from "./components/Depoimento";
import Footer from "./components/Footer";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>MK3 Representações</title>
        <meta
          name="description"
          content="MK3 é uma empresa de representação comercial que atua no ramo de Papelaria e Informática, com sede localizada em Araguaina - TO, atendemos todo o estado do Tocantins e região sul do estado do Pará."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MK3 Representações" key="title" />
        <meta
          property="og:description"
          content="MK3 é uma empresa de representação comercial que atua no ramo de Papelaria e Informática, com sede localizada em Araguaina - TO, atendemos todo o estado do Tocantins e região sul do estado do Pará."
        />
        <meta property="og:url" content="https:/mk3representacoes.com.br" />

        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />

        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </Head>

      <main className={styles.main}>
        <a
          className={styles.whatsappVerde}
          href="https://api.whatsapp.com/send?phone=556334125519&text=Ol%C3%A1%2C%20preciso%20falar%20com%20um%20representante%20comercial"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/icons/whatsapp-verde.png"
            alt="whatsapp mk3 representações"
            width={50}
            height={50}
          />
        </a>

        <Header />

        <div className={styles.introducaoImg}>
          <Slider />
        </div>
        <Introducao />
        <Sobre />
        <Mvv />
        <Catalogo />
        <Representadas />
        <Depoimento />
        {/* <Noticias       /> */}
        <Faq />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}
