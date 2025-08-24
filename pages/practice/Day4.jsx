// 4. Conditional Rendering
// 📌 Concepts

// Show UI based on conditions.

import React from 'react'

const ConditionalUI = ({isLogedin}) => {
  return (
    <div>
    {isLogedin?<h1>Welcome Back!</h1>:<h1>Please Log In</h1>}
    </div>
  )
}

export default ConditionalUI;
//👉 Other ways: && (short-circuit), if-else in functions.
