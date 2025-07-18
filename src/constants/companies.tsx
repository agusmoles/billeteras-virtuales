export const COMPANIES = [
  {
    title: "Claro Pay",
    image: "claro",
    color: "#D23D38",
    home: "https://claropay.com.ar",
    tna: 24.09,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Mercado Pago",
    image: "mercadopago",
    color: "#05B9FF",
    home: "https://www.mercadopago.com.ar",
    tna: 25.19,
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
    tna: 29.0,
    tnaPage:
      "https://blog.naranjax.com/proba-la-calculadora-tna-para-ver-cuanto-podes-ganar-con-naranja-x/",
    disclaimer: "Remunera el saldo hasta por $800.000 depositados",
    disclaimerIndex: 2,
  },
  {
    title: "Brubank",
    image: "brubank",
    color: "#5A3FFF",
    home: "https://www.brubank.com/",
    tna: 29.0,
    tnaPage: null,
    disclaimer: "A partir de los $750.000 remunera 24%",
    disclaimerIndex: 7,
  },
  {
    title: "Personal Pay",
    image: "personal",
    color: "#5A56FA",
    home: "https://www.personalpay.com.ar/cuentas-remuneradas",
    tna: 25.92,
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
    tna: 25.92,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Supervielle",
    image: "supervielle",
    color: "#DE0409",
    home: "https://www.supervielle.com.ar/",
    tna: 24.82,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Ualá (Uilo)",
    image: "uala",
    color: "#D65A71",
    home: "https://www.uala.com.ar/",
    tna: 30.0,
    tnaPage: null,
    disclaimer:
      "Paga rendimientos hasta $1.500.000 (Uilo con un mínimo de $10.000)",
    disclaimerIndex: 5,
  },
  {
    title: "Ualá (FCI)",
    image: "uala",
    color: "#D65A71",
    home: "https://www.uala.com.ar/",
    tna: 25.19,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Taca Taca",
    image: "tacataca",
    color: "#02D5B5",
    home: "https://www.taca-taca.com.ar/",
    tna: 25.92,
    tnaPage: null,
    disclaimer: "Sólo disponible en Córdoba",
    disclaimerIndex: 4,
  },
  {
    title: "Banco Galicia",
    image: "galicia",
    color: "#FA6400",
    home: "https://www.galicia.ar/personas",
    tna: 24.25,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "AstroPay",
    image: "astropay",
    color: "#27DEAF",
    home: "https://astropay.com/",
    tna: 24.46,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Let'sBit",
    image: "letsbit",
    color: "#45126B",
    home: "https://letsbit.io/",
    tna: 24.09,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Lemon Cash",
    image: "lemoncash",
    color: "#01E664",
    home: "https://lemon.me",
    tna: 24.76,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Cocos Pay",
    image: "cocospay",
    color: "#1C61DE",
    home: "https://cocos.capital/",
    tna: 31.03,
    tnaPage: null,
    disclaimer: null,
    disclaimerIndex: null,
  },
  {
    title: "Banco Bica",
    image: "bancobica",
    color: "#02B49E",
    home: "https://www.bancobica.com.ar/",
    tna: 30.0,
    tnaPage: null,
    disclaimer:
      "Remunera el saldo hasta por $500.000 depositados, luego son 26% desde $500.001 hasta $1.500.000 y, finalmente, 24% desde $1.500.001 hasta $10.000.000",
    disclaimerIndex: 6,
  },
].sort((a, b) => b.tna - a.tna);
