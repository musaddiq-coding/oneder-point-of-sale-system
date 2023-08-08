import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageAppBar from './components/Headers/HomeHeader/HomePageHeader';
import HomePage from './pages/HomePage/HomePage';
import Error from "./pages/ErrorPage/Error";
import SignIn from './components/Forms/UserSignIn';
import SignUp from './components/Forms/UserSignUp';
import AllForms from './components/Forms/AllForms'
import GetData from './components/GetData/GetData';
import DeshboardHeader from './components/Headers/DeshboardHeader/DeshboardHeader'
import DeshboardPage from './pages/DeshboardPage/DeshboardPage'
import OrderHeader from './components/Headers/OrderHeader/OrderHeader'
import OrderPage from './pages/OrderPage/OrderPage'
import Printers from './components/Forms/Printers';
import Discount from './components/Forms/Discount'
import Modifiers from './components/Forms/Modifiers'
// import Products from './components/Forms/Products'

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} >
            <Route index element={<HomePage toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/discounts" element={<Discount />} />
            {/* <Route path="/printers" element={<Printers />} /> */}
            {/* <Route path="/modifiers" element={<Modifiers />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/catagaries" element={<Category />} /> */}
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/deshboard" element={<DeshboardHeader toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<DeshboardPage />} />
            <Route path="/deshboard/allforms" element={<AllForms />} />
            <Route path="/deshboard/getcategory" element={<GetData />} />
          </Route>
          <Route path="/orders" element={<OrderHeader toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// export default App



const lightTheme = {
  backgroundColor: 'white',
  color: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  color: 'white',
};

function ThemeToggle(props) {
  // Initialize the theme state with the light theme
  const [theme, setTheme] = useState(lightTheme);

  // Define the function to toggle the theme
  function toggleTheme() {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }
  // 
  // Render the component with the current theme styles applied

  return (
    <div style={theme} className='maindiv' >


      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <App toggleTheme={toggleTheme} themeStyles={theme} />

      {props.children}

    </div>
  );

}

export default ThemeToggle;
