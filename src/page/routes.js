import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../component/footer'
import Available from './available'
import Booking from './booking'
import DetailNews from './detailnews'
import FieldDetail from './fielddetail'
import Home from './home'
import ListCategories from './listcategory'
import Categories from './category'
import Login from './login'
import Payment from './payment'
import Register from './register'
import SearchField from './search'
import FinishPayment from './thanks'
import ListNews from './listnews'

export default function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />

            <Route exact path="/search" element={<SearchField />} />
            <Route exact path="/category" element={<Categories />} />

            <Route exact path="/news" element={<ListNews />} />
            <Route exact path="/news/detail" element={<DetailNews />} />

            <Route exact path="/list" element={<ListCategories />} />
            <Route exact path="/list/detail" element={<FieldDetail />} />
            <Route exact path="/list/detail/available" element={<Available />} />
            <Route exact path="/list/detail/available/booking" element={<Booking />} />
            <Route exact path="/list/detail/available/booking/payment" element={<Payment />} />
            <Route exact path="/list/detail/available/booking/payment/finish" element={<FinishPayment />} />
        </Routes>
    </BrowserRouter>
  )
}
