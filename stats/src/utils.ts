export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  // in Date, January is 0 (we add -1)
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
