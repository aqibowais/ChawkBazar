import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import NewsletterSubscription from './NewsletterSubscription'
import FooterLinks from './FooterLinks'

const AppLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <NewsletterSubscription/>
        <FooterLinks/>
    </div>
  )
}

export default AppLayout
