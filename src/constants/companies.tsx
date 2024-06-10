export const COMPANIES = [
  {
    title: "Claro Pay",
    image: "claro",
    color: "#D23D38",
    home: "https://claropay.com.ar",
    tna: 29.18,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "MercadoPago",
    image: "mercadopago",
    color: "#05B9FF",
    home: "https://www.mercadopago.com.ar",
    tna: 31.52,
    tnaPage: "https://calculadora-mercadopago.com.ar/ganancias",
    disclaimer: (
      <>
        Pueden encontrar la TNA actualizada diariamente en la{" "}
        <a
          href="https://calculadora-mercadopago.com.ar"
          target="_blank"
          rel="noopenner noreferrer"
          style={{ textDecoration: "underline" }}
          className="text-blue-500"
        >
          Calculadora de MercadoPago
        </a>
      </>
    ),
    disclaimerIndex: 1,
  },
  {
    title: "NaranjaX",
    image: "naranja",
    color: "#E85212",
    home: "https://www.naranjax.com/",
    tna: 40,
    tnaPage:
      "https://blog.naranjax.com/proba-la-calculadora-tna-para-ver-cuanto-podes-ganar-con-naranja-x/",
    disclaimer: "Paga rendimientos hasta $400.000",
    disclaimerIndex: 2,
  },
  {
    title: "Personal",
    image: "personal",
    color: "#5A56FA",
    home: "https://www.personalpay.com.ar/cuentas-remuneradas",
    tna: 36,
    tnaPage: null,
    disclaimer:
      "Es la TNA para el nivel más bajo de la billetera, puede ser mayor según el nivel",
    disclaimerIndex: 3,
  },
  {
    title: "Prex",
    image: "prex",
    color: "#4D2597",
    home: "https://www.prexcard.com.ar/cuenta-remunerada",
    tna: 31.71,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Supervielle",
    image: "supervielle",
    color: "#DE0409",
    home: "https://www.supervielle.com.ar/",
    tna: 35.14,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Uala",
    image: "uala",
    color: "#D65A71",
    home: "https://www.uala.com.ar/",
    tna: 30.2,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "n1u",
    image: "n1u",
    color: "#FF009D",
    home: "https://n1u.app/",
    tna: 34.12,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Taca Taca",
    image: "tacataca",
    color: "#02D5B5",
    home: "https://www.taca-taca.com.ar/",
    tna: 35.42,
    tnaPage: null,
    disclaimer: "Sólo disponible en Cordoba",
    disclaimerIndex: 4,
  },
  {
    title: "Banco Galicia",
    image: "galicia",
    color: "#FA6400",
    home: "https://www.galicia.ar/personas",
    tna: 32.29,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "AstroPay",
    image: "astropay",
    color: "#27DEAF",
    home: "https://astropay.com/",
    tna: 27.4,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Let'sBit",
    image: "letsbit",
    color: "#45126B",
    home: "https://letsbit.io/",
    tna: 27.29,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
].sort((a, b) => b.tna - a.tna);
