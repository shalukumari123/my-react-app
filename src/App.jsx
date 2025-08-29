import "./App.css";
import { Route, BrowserRouter, Routes, Router, Navigate } from "react-router-dom";
import TodoApp from "../pages/todo-app/TodoApp";
import Footer from "../pages/Footer";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import AgeCalculator from "../pages/AgeCalculator";

const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("auth"));
  console.log('is logged value at start : ',isLoggedIn)
  return (
    
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route
            path="/home"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/todo"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <TodoApp />
              </PrivateRoute>
            }
          />
          <Route
            path="/age-calculator"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AgeCalculator />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    
  );
}
export default App;

//import FunctionalComponent from '../pages/Day1.jsx';
//import ClassComponent from '../pages/Day1';
// import User from '../pages/Day2';
//import Counter from '../pages/Day2';
//import Jsx from '../pages/Day3';
//import ConditionalUI from '../pages/Day4';
//import ListKeys from '../pages/Day5';
//import Controlled from '../pages/Day6';
//import Uncontrolled from '../pages/Day7';
//import BlogUI from '../pages/Day8_10';
//import CounterClass from '../pages/Day11';
//import CounterFunctional from '../pages/Day11';
// import CounterWithHokks from '../react-hooks/Day13';
// import ToggleLikeButton from '../react-hooks/Day13';
// import TimerWithCleanup from '../react-hooks/Day14';
// import FocusingInputUseRef from '../react-hooks/Day15';
// import CounterUsingUseRef from '../react-hooks/Day15';
// import ExpensiveCalculation from '../react-hooks/Day16';
// import ParentuseCallback from '../react-hooks/Day17';
// import Preventnnecessarychildrender from '../react-hooks/Day17';
// import CounteruseReducer from '../react-hooks/Day18';
// import TodoApp from '../react-hooks/Day19';
// import ThemeChange from './state-manage/ThemeContext';
// import IsloginContext from './state-manage/ThemeContext';
// import CounterSlice from './state-manage/CounterSlice';

// function App() {

//   return (
//     <>

{
  /* <FunctionalComponent /> */
}
{
  /* <ClassComponent /> */
}
{
  /* <User name={'Pankaj'}/> */
}
{
  /* <Counter /> */
}
{
  /* <Jsx /> */
}
{
  /* <ConditionalUI isLogedin={true}/> */
}
{
  /* <ListKeys/> */
}
{
  /* <Controlled/> */
}
{
  /* <Uncontrolled/> */
}
{
  /* <BlogUI/> */
}
{
  /* <CounterClass/> */
}
{
  /* <CounterFunctional/> */
}
{
  /* <CounterWithHokks/> */
}
{
  /* <ToggleLikeButton/> */
}
{
  /* <TimerWithCleanup/> */
}
{
  /* <FocusingInputUseRef/> */
}
{
  /* <CounterUsingUseRef/> */
}
{
  /* <ExpensiveCalculation/> */
}
{
  /* <ParentuseCallback/> */
}
{
  /* <Preventnnecessarychildrender/> */
}
{
  /* <CounteruseReducer/> */
}
{
  /* <TodoApp/> */
}
{
  /* <ThemeChange/> */
}
{
  /* <IsloginContext/> */
}
{
  /* <CounterSlice/> */
}

//     </>
//   )
// }

// export default App
