import Image from "next/image";
import { COMPANIES } from "@src/constants/companies";
import { formatPercentage } from "@src/utils/formatters";

type CardProps = (typeof COMPANIES)[number];

export const Card = ({
  title,
  image,
  color,
  home,
  tna,
  disclaimer,
  disclaimerIndex,
}: CardProps) => {
  return (
    <article
      style={{ color }}
      className="card relative w-[48.5%] sm:w-32 flex flex-col justify-center items-center gap-4 bg-white px-6 py-4 rounded-xl"
    >
      <div
        style={{ backgroundColor: color }}
        className="absolute -z-10 w-full h-full blur-3xl opacity-25"
      />
      <div className="relative">
        <a href={home} target="_blank" rel="noopenner noreferrer">
          <Image
            alt={`${title} logo`}
            width="48"
            height="48"
            src={`/assets/images/${image}.png`}
            title={title}
          />
        </a>
        {disclaimer && (
          <span className="absolute -top-[2px] -right-3 text-xs font-bold">
            *{disclaimerIndex}
          </span>
        )}
      </div>
      <div className="text-lg font-bold">
        {tna ? formatPercentage(tna) : "??"}
      </div>
    </article>
  );
};
