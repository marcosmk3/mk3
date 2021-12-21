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
      to: `contato@mk3representacoes.com.br`,
      subject: `${req.body.assunto}`,
      text: ``,
      html: ` <div>Nome: <strong>${req.body.nome}</strong></div>
              <div>Telefone: <strong>${req.body.telefone}</strong></div>
              <div>Email: <strong>${req.body.email}</strong></div>
              <br/><br/><br/>
              <div>${req.body.mensagem}</div>`,
    })
    .then((res) => {
      console.log("Email enviado com sucesso");
    })
    .catch((error) => {
      res.status(500).send(error);
      console.log(error);
    });
}
