const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

//* Get Local quotes
function newQuote() {
  //* Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = !quote.author ? "Unknown" : quote.author;
  quoteText.textContent = quote.text;
  console.log(quote);

  //* Check quote length to determine styling
  if (quote.text.lenght > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
}

//* Show New Quote
// function newQuote() {
//   //* Pick a random quote from apiQuotes array
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   authorText.textContent = !quote.author ? "Unknown" : quote.author;
//   quoteText.textContent = quote.text;

//   //* Check quote length to determine styling
//   if (quote.text.lenght > 120) {
//     quoteText.classList.add("long-quote");
//   } else {
//     quoteText.classList.remove("long-quote");
//   }
// }

//* Get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //* Catch Error here
  }
}

//* Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//* Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//* On Load
// getQuotes();

//* Load local quotes
newQuote();
