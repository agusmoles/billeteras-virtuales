import Image from "next/image";
import { COMPANIES } from "@src/constants/companies";
import { formatPercentage } from "@src/utils/formatters";

type CardProps = (typeof COMPANIES)[number];

export const Card = ({ title, image, color, home, tna }: CardProps) => {
  return (
    <article className="card relative w-[48.5%] sm:w-32 flex flex-col justify-center items-center gap-4 bg-white px-6 py-4 rounded-xl">
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
          title={title}
        />
      </a>
      <div style={{ color }} className="text-lg font-bold">
        {tna ? formatPercentage(tna) : "??"}
      </div>
    </article>
  );
};
