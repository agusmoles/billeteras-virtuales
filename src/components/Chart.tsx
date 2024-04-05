"use client";

import { useMemo, useState } from "react";
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

export const Chart = () => {
  const [amount, setAmount] = useState(INITIAL_AMOUNT);

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

  const data = COMPANIES.map((company) => ({
    id: company.image,
    label: company.title,
    color: company.color,
    data: DAYS_TO_CALCULATE.map((days) => ({
      date: getDateAfterDays(days),
      money: amount + calculateCompoundInterest(amount, company.tna, days),
    })),
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.value === "") return void setAmount(0);

    if (!value) return;
    setAmount(value);
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute top-4 left-14 z-10">
        <label
          htmlFor="amount"
          className="block text-xs font-medium leading-6 text-slate-900"
        >
          Ingresá tu inversión
        </label>
        <input
          type="text"
          id="amount"
          className="block w-24 rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={amount}
          onChange={handleChange}
        />
      </div>

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
