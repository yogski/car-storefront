export const displayAmount = (amountStr, separator = '.', decimalPlaces = 0) => {
  // Parse the input string to a number
  const number = parseFloat(amountStr);

  // Check if the input is a valid number
  if (isNaN(number)) {
    return amountStr;
  }

  // Format the number with the specified decimal places
  const formattedNumber = number.toFixed(decimalPlaces);

  // Split the number into integer and decimal parts
  const [integerPart, decimalPart] = formattedNumber.split('.');

  // Add thousand separators to the integer part
  const integerWithSeparators = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  // Combine the formatted integer and decimal parts
  const result = decimalPart ? `${integerWithSeparators}.${decimalPart}` : integerWithSeparators;

  return result;
}
