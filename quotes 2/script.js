
const quotes = [
  { author: "Albert Einstein", quote: "Imagination is more important than knowledge." },
  { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { author: "William Shakespeare", quote: "All the world's a stage, and all the men and women merely players." },
  { author: "William Faulkner",quote:"It may be bad, but it's the only way you can do anything really good."},
  {author: "William Shakespeare2",quote:"Boldness be my friend"},
  { author: "Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why." },
  { author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
  { author: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all." },
  { author: "Ralph Waldo Emerson", quote: "Do not go where the path may lead, go instead where there is no path and leave a trail." },
  { author: "Mother Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
  { author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." },
  {author: "George Eliot",quote:"It is never too late to be what you might have been."},
  {author: " Plato",quote:"Be kind, for everyone you meet is fighting a hard battle"},
  {author: " Stephen King",quote:"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."},
  {author:"Stephanie Bennett Henry",quote:"Life is tough my darling, but so are you"},
  {author:" George Eliot",quotes:"It is never too late to be what you might have been"},
  {author:" E. L. Doctorow",quotes:"Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way"},
  {author:"Herman Melville",quotes:"To produce a mighty book, you must choose a mighty theme"}
];

function searchQuotes() {
  const authorInput = document.getElementById('authorInput').value.trim().toLowerCase();

  // Filter quotes by author
  const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorInput));

  // Display a random quote from filtered results, if any
  const quoteContainer = document.getElementById('quoteText');
  if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const randomQuote = filteredQuotes[randomIndex];
      quoteContainer.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
  } else {
      quoteContainer.textContent = "No quotes found for this author.";
  }
}
