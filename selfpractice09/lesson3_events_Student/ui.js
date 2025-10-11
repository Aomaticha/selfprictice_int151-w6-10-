let quotes = [];

const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.dataset.id = quote.id;

  const contentP = document.createElement("p");
  contentP.textContent = quote.content;

  const authorP = document.createElement("p");
  authorP.textContent = quote.author;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id;

  editBtn.addEventListener("click", () => {
    contentInput.value = quote.content;
    authorInput.value = quote.author;
    idInput.value = quote.id;
  });

  deleteBtn.addEventListener("click", () => {
    deleteQuoteFromDOM(quote.id);
    quotes = quotes.filter(q => q.id !== quote.id);
  });

  div.appendChild(contentP);
  div.appendChild(authorP);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  return div;
}

function addQuoteToDOM(quote) {
  const quoteEl = createQuoteElement(quote);
  quoteList.appendChild(quoteEl);
}

function updateQuoteInDOM(quote) {
  const div = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (div) {
    div.querySelector("p:nth-child(1)").textContent = quote.content;
    div.querySelector("p:nth-child(2)").textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const div = quoteList.querySelector(`div[data-id="${id}"]`);
  if (div) quoteList.removeChild(div);
}

function renderQuotes() {
  quoteList.innerHTML = "";
  quotes.forEach(addQuoteToDOM);
}

function showRandomQuote() {
  if (quotes.length === 0) {
    randomDisplay.textContent = "-- No quotes to show --";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  randomDisplay.textContent = `"${quote.content}" — ${quote.author}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;

  if (!content || !author) return;

  if (id) {
    const existingQuote = quotes.find(q => q.id === Number(id));
    if (existingQuote) {
      existingQuote.content = content;
      existingQuote.author = author;
      updateQuoteInDOM(existingQuote);
    }
  } else {
    const newQuote = {
      id: Date.now(),
      content,
      author
    };
    quotes.push(newQuote);
    addQuoteToDOM(newQuote);
  }

  form.reset();
  idInput.value = "";
});

randomBtn.addEventListener("click", showRandomQuote);

renderQuotes();

