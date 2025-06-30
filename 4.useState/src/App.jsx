import { useState } from 'react'
import './App.css'

function App() {

  const [firstName , setFirstName] = useState('Hilal');
  const [lastName , setLastName] = useState('Ünver')

  const handleChange = ()=>{
    setFirstName('Ayşenur')
  }

  return (
   <div>
    {/* <div>{firstName}</div>
    <div><button onClick={()=>{setFirstName("Ayşenur")}}>İsmi Değiştir</button></div> */}

    <div>{firstName}</div>
    <div><button onClick={handleChange}>İsmi Değiştir</button></div>
   </div>
  )
}

export default App
