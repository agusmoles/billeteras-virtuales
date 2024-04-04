import { Card } from "@src/components/Card";
import { getCompaniesTNAs } from "@src/lib/companies";

export default async function Home() {
  const companies = await getCompaniesTNAs();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="mt-auto text-4xl font-semibold pb-2">Bienvenido!</h1>
      <h2 className="text-md">
        Acá podrás comparar las distintas billeteras virtuales disponibles en
        Argentina que generan rendimientos
      </h2>

      <section className="w-full max-w-5xl flex flex-wrap justify-center gap-x-[3%] sm:gap-x-4 gap-4 pt-6">
        {companies.map((company) => (
          <Card key={company.title} {...company} />
        ))}
      </section>

      <footer className="mt-auto w-full pt-4 px-4 text-xs text-gray-500">
        Actualizado al 3 de Abril de 2024
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
      </footer>
    </main>
  );
}
