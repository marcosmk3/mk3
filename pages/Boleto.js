// import { useState } from "react";
// import styles from "../styles/boleto.module.css";

// import Link from "next/link";

// const Boleto = () => {
//   const [email, setEmail] = useState("");
//   const [razao, setRazao] = useState("");
//   const [cnpj, setCnpj] = useState("");
//   const [nf, setNf] = useState("");
//   const [load, setLoad] = useState("");
//   const [representada, setRepresentada] = useState("");

//   function mostrarForm({ target }) {
//     const form = document.querySelector("#form");
//     form.style.display = "flex";

//     const seletor = document.querySelectorAll(".seletor");
//     seletor.forEach((item) => {
//       item.style.background = "var(--cor-primaria)";
//     });

//     target.style.background = "var(--cor-destaque)";
//     setRepresentada(target.id);
//   }

//   async function enviar(evt) {
//     evt.preventDefault();

//     fetch("/api/boleto/contact", {
//       method: "POST",
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         representada,
//         email,
//         razao,
//         cnpj,
//         nf,
//       }),
//     })
//       .then(
//         setEmail(""),
//         setRazao(""),
//         setCnpj(""),
//         setNf(""),
//         setLoad("Email enviado")
//       )
//       .catch((res, error) => {
//         if (res.status === 500) {
//           res.status(500).send(error);
//         }
//         setLoad(
//           "Email não enviado, tente novamente, ou envie para contato@mk3representacoes.com.br"
//         );
//       });
//     setTimeout(() => {
//       setLoad("");
//       window.location.href = "/";
//     }, 5000);
//   }

//   return (
//     <div className={styles.boleto}>
//       <Link href={"/"} passHref>
//         <button className={styles.voltar}>&#8592; Voltar</button>
//       </Link>
//       <h1>Selecione a representada</h1>
//       <ul>
//         <li
//           onClick={mostrarForm}
//           id="valdisneidev@gmail.com"
//           className="seletor"
//         >
//           Acrimet
//         </li>
//         <li onClick={mostrarForm} id="contato@acp.com" className="seletor">
//           ACP
//         </li>
//         <li onClick={mostrarForm} id="contato@adere.com" className="seletor">
//           Adere
//         </li>
//         <li onClick={mostrarForm} id="contato@bacchi.com" className="seletor">
//           Bacchi
//         </li>
//         <li
//           onClick={mostrarForm}
//           id="contato@compactor.com"
//           className="seletor"
//         >
//           Compactor
//         </li>
//         <li onClick={mostrarForm} id="contato@maxprint.com" className="seletor">
//           MaxPrint
//         </li>
//         <li onClick={mostrarForm} id="contato@mercur.com" className="seletor">
//           Mercur
//         </li>
//         <li onClick={mostrarForm} id="contato@offpaper.com" className="seletor">
//           Off Paper
//         </li>
//         <li
//           onClick={mostrarForm}
//           id="contato@saodomingos.com"
//           className="seletor"
//         >
//           São Domingos
//         </li>
//         <li onClick={mostrarForm} id="contato@seanit.com" className="seletor">
//           Seanit
//         </li>
//       </ul>

//       <form id="form" onSubmit={enviar}>
//         <div>
//           <span>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={email}
//               onChange={({ target }) => setEmail(target.value)}
//             />
//           </span>

//           <span>
//             <label htmlFor="razao">Razão Social</label>
//             <input
//               id="razao"
//               name="razao"
//               type="text"
//               required
//               value={razao}
//               onChange={({ target }) => setRazao(target.value)}
//             />
//           </span>

//           <span>
//             <label htmlFor="cnpj">CNPJ</label>
//             <input
//               id="cnpj"
//               name="cnpj"
//               type="text"
//               required
//               value={cnpj}
//               onChange={({ target }) => setCnpj(target.value)}
//             />
//           </span>

//           <span>
//             <label htmlFor="nf">Número da nota fiscal</label>
//             <input
//               id="nf"
//               name="nf"
//               type="text"
//               required
//               value={nf}
//               onChange={({ target }) => setNf(target.value)}
//             />
//           </span>
//         </div>

//         <button>Solicitar segunda via</button>
//       </form>

//       <p
//         style={
//           load == "Email enviado"
//             ? { color: "rgb(0, 182, 0" }
//             : { color: "red" }
//         }
//       >
//         {load}
//       </p>
//     </div>
//   );
// };

// export default Boleto;
