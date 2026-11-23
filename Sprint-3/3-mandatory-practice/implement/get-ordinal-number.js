function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;

  // 11, 12 and 13 are special: they always end in "th"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  const lastDigit = num % 10;

  if (lastDigit === 1) return `${num}st`;
  if (lastDigit === 2) return `${num}nd`;
  if (lastDigit === 3) return `${num}rd`;

  return `${num}th`;
}

module.exports = getOrdinalNumber;
