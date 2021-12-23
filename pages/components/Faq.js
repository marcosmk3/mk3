import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Faq = () => {
  function handleRes(evt) {
    const perguntas = document.querySelectorAll("dt");
    perguntas.forEach((item) => {
      item.classList.remove("ativo");
    });
    evt.target.classList.toggle("ativo");

    const respostas = document.querySelectorAll("dd");
    respostas.forEach((item) => {
      item.classList.remove("ativa");
    });
    evt.target.nextElementSibling.classList.toggle("ativa");
  }
  return (
    <section className={styles.faq + " cont"} id="faq">
      <h3>Perguntas frequentes</h3>
      <dl>
        <div>
          <dt
            aria-controls="pergunta1"
            aria-expanded="true"
            onClick={handleRes}
            className="ativo"
          >
            Onde solicitar orçamentos?
          </dt>
          <dd id="pergunta1" className="ativa">
            Para orçamentos é necessário entrar em contato com um de nossos
            representantes clicando{" "}
            <Link
              href="https://api.whatsapp.com/send?phone=556334125519&text=Ol%C3%A1%2C%20preciso%20falar%20com%20um%20representante%20comercial"
              passHref
            >
              <a target="_blank" rel="noreferrer">
                aqui
              </a>
            </Link>{" "}
            para ter acesso ao{" "}
            <Link href="https://mk3.suasvendas.com/#services">
              <a target="_blank" rel="noreferrer">
                portal do cliente
              </a>
            </Link>
            , contamos com mais de 3k itens para você cliente.
          </dd>
        </div>

        <div>
          <dt
            aria-controls="pergunta2"
            aria-expanded="false"
            onClick={handleRes}
          >
            Não recebi o boleto bancário, o que devo fazer?
          </dt>
          <dd id="pergunta2">
            Basta clicar em 2ª via de boleto no menu localizado no topo do site,
            ou clicando <a href="#boleto">aqui</a>.
          </dd>
        </div>

        <div>
          <dt
            aria-controls="pergunta3"
            aria-expanded="false"
            onClick={handleRes}
          >
            Quais as formas de pagamento?
          </dt>
          <dd id="pergunta3">
            Trabalhamos com as formas de pagamento boleto, transferência
            bancária e pix.
          </dd>
        </div>
        <div>
          <dt
            aria-controls="pergunta4"
            aria-expanded="false"
            onClick={handleRes}
          >
            Posso comprar a prazo?
          </dt>
          <dd id="pergunta4">
            Para compras a prazo, é necessário passar por uma análise de
            crédito, mediate o primeiro pedido feito conosco.
          </dd>
        </div>

        <div>
          <dt
            aria-controls="pergunta5"
            aria-expanded="false"
            onClick={handleRes}
          >
            Como funciona a entrega?
          </dt>
          <dd id="pergunta5">
            A entrega pode ser feita por transportadora própria ou de terceiros,
            os prazos de entrega variam de acordo com sua região.
          </dd>
        </div>
      </dl>

      <h4>Ainda tem dúvidas?</h4>
      <p>
        Se você não conseguir encontrar uma resposta para sua pergunta em nosso
        FAQ, você pode{" "}
        <Link
          href="https://api.whatsapp.com/send?phone=556334125519&text=Ol%C3%A1"
          passHref
        >
          <a target="_blank">nos contatar</a>
        </Link>
        . Responderemos em breve!
      </p>
    </section>
  );
};

export default Faq;
