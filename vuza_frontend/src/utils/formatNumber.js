import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fNumber(number) {
  return numeral(number).format();
}

export function fCurrency(number) {
  console.log(number);  // Log the input to check its type and value
  
  // Convert the input to a number type
  const numericValue = Number(number);
  
  // If the value is NaN or 0, return '$0.00'
  if (isNaN(numericValue) || numericValue === 0) {
    return '$0.00';
  }

  // Handle small numbers (scientific notation) by converting to a fixed decimal format
  let formattedNumber = numericValue.toFixed(10);  // Ensures the number is treated as a fixed decimal
  
  // Use numeral to format the number as currency
  const format = numeral(formattedNumber).format('$0,0.00');
  
  return format;
}


export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

export function fData(number) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}
