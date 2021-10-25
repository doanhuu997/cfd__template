import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../components/login';
import Footer2 from '../components/footer2';
export default function Mainlayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Login />
            <Footer />
            <Footer2 />
        </>
    )
}