import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://freequote.herokuapp.com/')
      .then(res => res.json())
      .then(data => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);
  return (
    <>
      <div className="quotes-container">
        <div className="quote">
          { `"${quote}"` }
        </div>
        <div className="author">
          { author }
        </div>
      </div>
    </>
  );
};

export default Quote;
