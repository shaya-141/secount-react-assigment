import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import img1 from './assets/burger.jpg'
import img2 from './assets/pizza.jpg'
import img3 from './assets/biryani.webp'
function App() {
 
let imgone = img1
let imgtwo = img2
let imgthree = img3

  return (
    <>
    <h1 className='head'>OUR MENUS</h1>
      <div id="container">
        <Card img={imgone} text = "burger" price = "2$"></Card>
        <Card img={imgtwo} text = "pizza" price = "5$"></Card>
        <Card img={imgthree} text = "birayni" price = "3$"></Card>
        
      </div>
    </>
  )
}

export default App
