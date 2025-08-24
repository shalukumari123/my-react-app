
// 📖 4. State Management (1 Week)
// State management is about handling global state (shared between components) and server state (data fetched from APIs).
// 1. Context API
// 📌 Concept
// Provides a way to pass data without props drilling.
// Works well for theme, language, authentication state.

// import React,{createContext, useContext, useState} from 'react';
// const ThemeContext=createContext()

// function ThemeProvider({children}){
//     const [theme,setTheme]=useState('light');
//     return (
//         <ThemeContext.Provider value={{theme,setTheme}}>
//         {children}
//         </ThemeContext.Provider>
//     )
// }

// function ButtunTheme(){
//     const {theme,setTheme}=useContext(ThemeContext)
//     return <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Current THEME:{theme}</button>
// }

// const ThemeChange = () => {
//   return (
//     <ThemeProvider>
//       <ButtunTheme/>
//     </ThemeProvider>
//   )
// }

// export default ThemeChange;

//👉 Practice: Create a global auth context with isLoggedIn and setIsLoggedIn.
import React, { createContext, useContext, useState } from 'react';
const LoginContext=createContext();

function LoginInProvider({children}){
    const [isLigin,setIsligin]=useState(true);
    return (
        <LoginContext.Provider value={{isLigin,setIsligin}}>
            {children}
        </LoginContext.Provider>
    )
}

function CheckIn(){
    const {isLigin,setIsligin}=useContext(LoginContext);
    return (
        <>
        <h1>{isLigin?'Welcome Back':'Please LoginFirst'}</h1>
        <button onClick={()=>setIsligin(isLigin?false:true)}>{isLigin?'Logout':'Login'}</button>
        </>
    )
}


const IsloginContext = () => {
  return (
    <LoginInProvider>
      <CheckIn/>
    </LoginInProvider>
  )
}

export default IsloginContext;

