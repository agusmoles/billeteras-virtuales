"use server";

import { COMPANIES } from "@src/constants/companies";

export const getCompaniesTNAs = async () => {
  return COMPANIES;
};
