import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'

function App() {

  const router = createHashRouter([
    { path:'',element:<Layout/>,children:[
      {path:'',element:<Home/>},
      {path:'home',element:<Navigate to={'/'}/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
