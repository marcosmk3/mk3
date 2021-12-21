import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [load, setLoad] = useState("");
  const [assunto, setAssunto] = useState("");

  // replace(/\D/g, '').replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")

  async function enviar(evt) {
    evt.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        mensagem,
        assunto,
      }),
    })
      .then(
        setNome(""),
        setTelefone(""),
        setEmail(""),
        setMensagem(""),
        setAssunto(""),
        setLoad("Email enviado")
      )
      .catch((res, error) => {
        if (res.status === 500) {
          res.status(500).send(error);
        }
        setLoad(
          "Email não emviado, tente novamente, ou envie para contato@mk3representacoes.com.br"
        );
      });
    setTimeout(() => {
      setLoad("");
    }, 5000);
  }

  return (
    <section className={styles.contato + " cont"} id="contato">
      <h2 className="titulo">Contato</h2>
      <div>
        <div className={styles.contatoForm}>
          <p>
            Vamos começar a trabalhar juntos.
            <br /> Entre em contato com alguém da nossa equipe hoje! 😁
          </p>
          <form method="POST">
            <div>
              <div>
                <label htmlFor="nome">Seu Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={nome}
                  onChange={({ target }) => setNome(target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone">Seu Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="text"
                  value={telefone}
                  onChange={({ target }) => setTelefone(target.value)}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">Seu Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />

            <label htmlFor="assunto">Assunto</label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              value={assunto}
              onChange={({ target }) => setAssunto(target.value)}
              required
            />

            <label htmlFor="mensagem">Sua Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={({ target }) => setMensagem(target.value)}
              required
            />
            <button onClick={enviar}>Envia Mensagem :)</button>
            <span
              style={
                load == "Email enviado"
                  ? { color: "rgb(0, 182, 0" }
                  : { color: "red" }
              }
            >
              {load}
            </span>
          </form>
        </div>

        <div className={styles.contatoEndereco}>
          <h2>Telefone</h2>
          <p>(63) 3412-5519</p>
          <h2>Email</h2>
          <p> contato@mk3representacoes.com.br</p>
          <h2>Endereço</h2>
          <p>
            {" "}
            R. das Jaboticabeiras, 122 - Lot. Araguaina Sul, Araguaína - TO
          </p>

          <div>
            <Link
              href="https://www.google.com/maps/dir/-7.20896,-48.1984512/Mk+3+Representa%C3%A7%C3%B5es+-+R.+Tr%C3%AAs,+1306+-+Lot.+Araguaina+Sul,+Aragua%C3%ADna+-+TO,+77807-120/@-7.2001618,-48.2072022,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x92d90c497c504c33:0x12cfe6c01ba9b83!2m2!1d-48.1943559!2d-7.1922742"
              rel="noreferrer"
              target="_blank"
              passHref
            >
              <a target="_blank">
                <Image
                  alt="endereço mk3 representações"
                  src="/mapa.png"
                  width={430}
                  height={250}
                />
              </a>
            </Link>
          </div>
          <div className={styles.contatoredes}>
            <Link
              href="https://www.instagram.com/mk3representacoes/"
              rel="noreferrer"
              passHref
            >
              <a target="_blank">
                <Image
                  alt="instagram mk3 representações"
                  src="/icons/instagram.svg"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
            <Link
              href="https://pt-br.facebook.com/MK3-Representa%C3%A7%C3%B5es-1813267405628032/"
              rel="noreferrer"
              passHref
            >
              <a target="_blank">
                <Image
                  alt="facebook mk3 representações"
                  src="/icons/facebook.svg"
                  width={55}
                  height={55}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
