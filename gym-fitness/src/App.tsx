import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <h1 className="text-3xl sm:bg-primary-500  text-black font-bold underline">
      Hello world!
    </h1>
    <p className='font-monsterrat'>Test</p>
    <p className='font-dmssans'>Test</p>
    <p>Test</p>
      </div>
    </>
  )
}

export default App
