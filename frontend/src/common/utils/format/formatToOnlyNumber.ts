export function formatToOnlyDecimalNumbers(number: string) {
  return number
    .replace(/\D/g, '')
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*?)\..*/g, '$1');
}

export function formatToOnlyNumbers(number: string) {
  return number.replace(/\D/g, '').replace(/[^0-9]/g, '');
}

export function formatToOnlyNumbersWithNoLeadingZero(number: string) {
  // Remove todos os caracteres não numéricos
  const numericString = number.replace(/\D/g, '');

  // Remove os zeros iniciais, exceto se for o único caractere
  const trimmedNumericString =
    numericString.length > 1 ? numericString.replace(/^0+/, '') : numericString;

  return trimmedNumericString;
}
