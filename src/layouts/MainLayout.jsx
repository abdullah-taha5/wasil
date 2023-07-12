import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollButton from '../components/ScrollButton'

function MainLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <ScrollButton/>
      <Footer />
    </>
  )
}

export default MainLayout