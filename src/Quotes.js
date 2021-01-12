import React, { useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('Here is a default quote');

  function generateQuoteClicked() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(resp => resp.json())  
      .then(resp => setQuote(resp.data[0].quoteText))
      .catch(error => console.log('error: ', error))
  }

  return (
    <div className="Quotes">
      <div className="Quote">"{quote}"</div>
      <button onClick={generateQuoteClicked}>Generate Quote</button>
    </div>
  );
}

export default Quotes;
