import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../Pages/Home/Home'
import PaymentSuccess from '../Pages/PaymentSuccess/PaymentSuccess'
import  Cart from '../Pages/Cart/Cart'
import Login from '../Pages/Login/Login'
import Menu from '../Pages/Menu/Menu'
import Register from '../Pages/Register/Register'

function Navigation() {
    return (
        <div>
            <BrowserRouter>
                
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/register' element={<Menu/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/payment-success' element={<PaymentSuccess/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navigation;
