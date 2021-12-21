export default function enviar(req, res) {
  let nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtps.uhserver.com",
    port: 465,
    secure: true,
    auth: {
      user: "contato@mk3representacoes.com.br",
      pass: process.env.SECRETE,
    },
  });

  transporter
    .sendMail({
      from: `contato@mk3representacoes.com.br`,
      replyTo: `${req.body.email}`,
      to: `${req.body.representada}`,
      subject: `segunda via de boleto`,
      text: ``,
      html: ` <br/>
              <div>Olá, preciso da segunda via do meu boleto, os dados estão listados abaixo.<br/>Obrigado!</div>
              <br/>
              <br/>
              <div>Email: <strong>${req.body.email}</strong></div>
              <div>Razão Social: <strong>${req.body.razao}</strong></div>
              <div>CNPJ: <strong>${req.body.cnpj}</strong></div>
              <div>Nota Fiscal: <strong>${req.body.nf}</strong></div>
              `,
    })
    .then((res) => {
      console.log("Email enviado com sucesso");
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
}
