import React, { useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState({ text: 'Here is a default quote', author: 'Anonymous' });

  function generateQuoteClicked() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(resp => resp.json())  
      .then(resp => setQuote({ text: resp.data[0].quoteText, author: resp.data[0].quoteAuthor }))
      .catch(error => console.log('error: ', error))
  }

  return (
    <div className="Quotes">
      <div className="Quote">"{quote.text}" -{quote.author}</div>
      <button onClick={generateQuoteClicked}>Generate Quote</button>
    </div>
  );
}

export default Quotes;
