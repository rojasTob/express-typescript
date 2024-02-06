function formatToYYYYMMDD(date: Date):string{
  return [
    date.getFullYear(),
    date.getMonth() + 1, 
    date.getDate()
  ].join('/');
}

/**
 * Format a date
 * @param date could be a Date, number(unix epoch time) or undefined
 * @returns a string with a formatted date in YYYY/MM/DD
 */
export const dateFormat = (date: Date | number):string => {
  if(date instanceof Date){
    return formatToYYYYMMDD(date);
  }
  const tempDate = new Date(date * 1000);
  return formatToYYYYMMDD(tempDate);
}
