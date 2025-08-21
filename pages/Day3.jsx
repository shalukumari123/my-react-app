// 3. JSX Basics
// 📌 Concepts

// JSX allows writing HTML-like syntax inside JS.

// Must return a single parent element.

// Use {} to embed JS expressions.

// className instead of class.
import React from 'react'

const Jsx = () => {
    const myName='Pankaj';
  return (
    <div>
        <h1>{myName}</h1>
        <h2 className='addition'>2+2={2+2}</h2>
      
    </div>
  )
}

export default Jsx;
