export const calculateCompoundInterest = (
  principal: number,
  rate: number,
  timeInDays: number
): number => {
  const dailyRate = rate / 100 / 365;
  const exponent = Math.pow(1 + dailyRate, timeInDays);
  const amount = principal * exponent;
  const interest = amount - principal;
  return interest;
};
