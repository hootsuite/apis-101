import React, { useState } from 'react';

// clicking generate quotes will give us all quotes from this author
const AUTHOR = 'Buddha'

function Quotes() {
  const [quotes, setQuotes] = useState(['Here is a default quote']);

  function generateQuotesClicked() {
    fetch(`https://quote-garden.herokuapp.com/quotes/author/${AUTHOR}`)
      .then(resp => resp.json())  
      .then(resp => setQuotes(resp.results.map(quote => quote.quoteText)))
      .catch(error => console.log('error: ', error))
  }

  return (
    <div className="Quotes">
      {quotes.map(quote => <div key={quote} className="Quote">"{quote}"</div>)}
      <button onClick={generateQuotesClicked}>Generate Quotes</button>
    </div>
  );
}

export default Quotes;
