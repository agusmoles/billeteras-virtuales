"use client";

import { useMemo } from "react";
import { AxisOptions, Chart as ReactChart } from "react-charts";
import { COMPANIES } from "@src/constants/companies";
import { getDateAfterDays } from "@src/utils/date";
import { formatCurrency } from "@src/utils/formatters";
import { calculateCompoundInterest } from "@src/utils/tna";

type DailyMoney = {
  date: Date;
  money: number;
};

const INITIAL_AMOUNT = 10_000;
const DAYS_TO_CALCULATE = [1, 5, 30, 60, 180, 365] as const;

const data = COMPANIES.map((company) => ({
  id: company.image,
  label: company.title,
  color: company.color,
  data: DAYS_TO_CALCULATE.map((days) => ({
    date: getDateAfterDays(days),
    money:
      INITIAL_AMOUNT +
      calculateCompoundInterest(INITIAL_AMOUNT, company.tna, days),
  })),
}));

export const Chart = () => {
  const primaryAxis = useMemo<AxisOptions<DailyMoney>>(
    () => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<DailyMoney>[]>(
    () => [
      {
        getValue: (datum) => datum.money,
        formatters: {
          tooltip: (value: number) => formatCurrency(value),
        },
      },
    ],
    []
  );
  return (
    <div className="w-full h-96">
      <ReactChart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          defaultColors: COMPANIES.map((company) => company.color),
        }}
      />
    </div>
  );
};
