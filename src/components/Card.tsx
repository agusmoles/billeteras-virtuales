import Image from "next/image";
import { COMPANIES } from "@src/constants/companies";

type CardProps = (typeof COMPANIES)[number];

const formatter = new Intl.NumberFormat("es-AR", {
  style: "percent",
  maximumFractionDigits: 2,
});

export const Card = ({ title, image, color, home, tna }: CardProps) => {
  return (
    <article className="relative w-[48.5%] sm:w-32 flex flex-col justify-center items-center gap-4 bg-white px-6 py-4 rounded-xl">
      <div
        style={{ backgroundColor: color }}
        className="absolute -z-10 w-full h-full blur-3xl opacity-25"
      />
      <a href={home} target="_blank" rel="noopenner noreferrer">
        <Image
          alt={`${title} logo`}
          width="48"
          height="48"
          src={`/assets/images/${image}.png`}
        />
      </a>
      <div style={{ color }} className="text-lg font-bold">
        {tna ? `${formatter.format(tna / 100).replace(/\s/gi, "")}` : "??"}
      </div>
    </article>
  );
};
