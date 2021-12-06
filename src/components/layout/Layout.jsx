import React from 'react'
import Header from "./header/Header"
import NavBar from "./navbar/NavBar"
import Footer from "./footer/Footer"


const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
