import React, { useState } from 'react';

function Quotes() {
  // We are using a React feature called "Hooks"
  // You can read more about React Hooks here https://reactjs.org/docs/hooks-intro.html
  // Bonus: Can quote include author? Then display "Here is a default quote" -Author
  const [quote, setQuote] = useState('Here is a default quote');

  // Bonus: Get all quotes from an author (i.e Albert Einstein, Aristotle, Buddha) on click of button

  function generateQuoteClicked() {
    // This function will trigger every time the "Generate Quote" button is clicked
    // Make your API request here to get a random quote: https://github.com/pprathameshmore/QuoteGarden#get-a-random-quote
    // Have a look at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // The section that reads "A basic fetch request is really simple to set up" will help you with this
    fetch(/* TODO */)
      .then(resp => resp.json())  
      .then(resp => {
          // resp is what we're getting back from the API call we make
          // It should match the API Documentation we read 
          // Take a look at the resp in your browser console, then use setQuote to set the quote
          console.log(resp);
      })
      .catch(error => console.log('error: ', error)) // What would you show to the user in case of error?
  }

  return (
    <div className="Quotes">
      <div className="Quote">"{quote}"</div>
      <button onClick={generateQuoteClicked}>Generate Quote</button>
    </div>
  );
}

export default Quotes;
