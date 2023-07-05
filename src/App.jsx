import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbar from './components/navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      </div>
      
      
    </>
  )
}


export default App
