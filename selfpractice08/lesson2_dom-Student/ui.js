import { addQuote, getAllQuotes } from "./quote.js";

function addNewQuote(content, author) {
  addQuote(content, author);
}


function renderQuotes() {
  const quoteList = document.getElementById("quote-list");

  quoteList.innerHTML = "";

  const quotes = getAllQuotes();

  for (const q of quotes) {
    const p = document.createElement("p");
    p.textContent = `"${q.content}" — ${q.author}`;
    quoteList.appendChild(p);
  }
}


addNewQuote("Stay hungry, stay foolish.", "Steve Jobs");
addNewQuote("Do or do not. There is no try.", "Yoda");
addNewQuote("Simplicity is the ultimate sophistication.", "Leonardo da Vinci");

renderQuotes();
