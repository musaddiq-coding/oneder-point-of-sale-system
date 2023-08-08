import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import Error from "./components/ErrorPage/Error"
import HeaderAppBar from "./components/HeaderContainer/HeaderAppBar"
import NestedHeaderNavBar from "./components/OrderPage/OrderPageAppBar/NestedHeaderNavBar"
import OrderPage from "./components/OrderPage/OrderPage"
import SignIn from './components/Forms/SignIn'
import SignUp from './components/Forms/SignUp'
import SectionContainer from './components/SectionB/SectionContainer'
import Customers from './components/Pages/Customers'
// import HomePageB from './components/SectionB/HomePageB/HomePageB'
// import HeaderAppBarB from './components/SectionB/HeaderContainerB/HeaderAppBarB'
// import EmptyPage from './components/SectionB/HomePageB/EmptyPage'
// import UpDownCards from './components/SectionB/SectionContainer'
import Cards from './components/Pages/Cards'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HeaderAppBar />} >
            <Route index element={<HomePage />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Attampt faild because this is the same way as orignal app if orignal can  not do in this way this will also be
          failed */}
          {/* <Route path="/cards" element={<HeaderAppBarB />} >
            <Route index element={<HomePageB />} />
          </Route> */}

          <Route path="/cards" element={<SectionContainer />} >
            {/* <Route path="/cards/customers" element={<UpDownCards />} /> */}
            {/* <Route index element={<EmptyPage />} /> */}
            <Route path="/cards/card1" element={<Cards />} />
          </Route>

          <Route path="/orders" element={<NestedHeaderNavBar />}>
            <Route index element={<OrderPage />} />
            <Route path="/orders/customers" element={<Customers />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
