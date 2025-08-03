import React from 'react';

function GreetingCardDestruct({ name, message, textColor = 'blue' }) {

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '9px', borderRadius: '8px', textAlign: 'center', color: textColor }}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
      <small>Hope you have a wonderful day!</small>
    </div>
  );
}


export default GreetingCardDestruct;