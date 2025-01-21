import nextDynamic from "next/dynamic";
import { Card } from "@src/components/Card";
import { COMPANIES } from "@src/constants/companies";

const Chart = nextDynamic(() => import("../components/Chart"), { ssr: false });

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="mt-auto text-4xl font-semibold pb-2">Bienvenido!</h1>
      <h2 className="text-md">
        Acá podrás comparar las distintas billeteras virtuales disponibles en
        Argentina que generan rendimientos
      </h2>

      <section className="w-full max-w-5xl flex flex-wrap justify-center gap-x-[3%] sm:gap-x-4 gap-4 pt-6">
        {COMPANIES.map((company) => (
          <Card key={company.title} {...company} />
        ))}
      </section>

      <section className="w-full max-w-5xl mt-8">
        <h3 className="text-sm pb-2">
          Así evolucionaría tu inversión con cada billetera
        </h3>

        <Chart />
      </section>

      <footer className="mt-auto w-full pt-4 px-4 text-xs text-gray-500">
        <div className="pt-4 pb-2 leading-5">
          {COMPANIES.filter((company) => company.disclaimer)
            .sort((a, b) => (a.disclaimerIndex || 0) - (b.disclaimerIndex || 0))
            .map((company) => (
              <div key={company.title} style={{ color: company.color }}>
                <sup>*{company.disclaimerIndex}</sup> {company.disclaimer}
              </div>
            ))}
        </div>

        <div>
          Actualizado al 21 de Enero de 2025
          <br />
          Creado por{" "}
          <a
            href="https://agustinmoles.com.ar"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-blue-500"
          >
            Agus Molés🤍
          </a>
        </div>
      </footer>
    </main>
  );
}

export const dynamic = "force-static";
