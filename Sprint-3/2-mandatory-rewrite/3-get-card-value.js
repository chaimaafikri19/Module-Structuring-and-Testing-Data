function getCardValue(card) {
  const rank = card.slice(0, -1);

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (rank === "J" || rank === "Q" || rank === "K") return 10;

  // Number cards 2-10
  const number = Number(rank);
  if (Number.isInteger(number) && number >= 2 && number <= 10) return number;

  // Anything else is not a real card rank
  throw new Error("Invalid card rank.");
}

module.exports = getCardValue;
