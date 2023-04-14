import React, { useState } from 'react'
import Navbar from './Navbar'
import { Epilogue } from 'next/font/google'
import Sidebar from './Sidebar'


const roboto = Epilogue({
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

function Layout(props) {

  const [open, setopen] = useState(false)

  return (
    <div>
     <Sidebar open={open} setopen={setopen}/> 
     <Navbar open={open} setopen={setopen}/>
     {props.children}  
    </div>
  )
}

export default Layout