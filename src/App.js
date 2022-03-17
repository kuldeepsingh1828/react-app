import React from 'react'
import Register from './components/Register';
import Product from './components/Product';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import First from './components/first';
import Second from './components/second';
export default function App() {
    return (
        <div>
            <Router>
                <Link to="/register" style={{ padding: "10px" }}>Register</Link>
                <Link to="/login" style={{ padding: "10px" }}>Login</Link>
                <Link to="/products" style={{ padding: "10px" }}>All Products</Link>
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/first">
                        <Route path=":id" element={<First />} />
                        <Route path=":id/:action" element={<First />} />
                    </Route>
                    <Route path="/second" element={<Second />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Product />} />
                </Routes>
            </Router>
        </div>
    )
}
