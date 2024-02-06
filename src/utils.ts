function formatToYYYYMMDD(date: Date):string{
  return [
    date.getFullYear(),
    date.getMonth() + 1, 
    date.getDate()
  ].join('/');
}

/**
 * Format a date in YYYY/MM/DD
 * @param date Date or number(unix epoch time)
 * @returns string  with a formatted date in YYYY/MM/DD
 */
export const dateFormat = (date: Date | number):string => {
  if(date instanceof Date){
    return formatToYYYYMMDD(date);
  }
  const tempDate = new Date(date * 1000);
  return formatToYYYYMMDD(tempDate);
}
