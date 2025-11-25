import { useState } from 'react'
import Header from './components/header'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className='bg-black/80'>
      <Header/>
      <div className="h-16 w-full items-center text-3xl text-white flex justify-between">
        <h1>Murigu Gitonga</h1>
      </div>
    </nav>
  )
}

export default App
