// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  // FIX: rank was never defined. It is the card without its last character (the suit).
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

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// ADDED: console.assert can't catch a thrown error, so this helper uses try/catch.
// It passes only when the function throws the expected message.
function assertThrows(card, expectedMessage) {
  try {
    getCardValue(card);
    console.assert(
      false,
      `Expected ${card} to throw "${expectedMessage}" but it did not`
    );
  } catch (error) {
    console.assert(
      error.message === expectedMessage,
      `Expected error "${expectedMessage}" but got "${error.message}"`
    );
  }
}

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5); // ADDED
assertEquals(getCardValue("2♣"), 2); // lowest number card
assertEquals(getCardValue("9♦"), 9); // highest single-digit card

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
assertEquals(getCardValue("10♠"), 10); // ADDED: two-character rank
assertEquals(getCardValue("J♥"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♣"), 10);

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
assertEquals(getCardValue("A♥"), 11); // ADDED: Ace of another suit

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
assertThrows("1♠", "Invalid card rank."); // below 2
assertThrows("11♠", "Invalid card rank."); // above 10
assertThrows("X♦", "Invalid card rank."); // not a real rank
assertThrows("a♠", "Invalid card rank."); // lowercase is not accepted
assertThrows("♠", "Invalid card rank."); // no rank at all
