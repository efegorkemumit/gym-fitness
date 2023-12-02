import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './screen/Navbar'

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScrool=()=>{
      if(window.scrollY ===0){
        setIsTopOfPage(true);
      }
      if(window.scrollY !==0){
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScrool);
    return ()=>window.removeEventListener("scroll", handleScrool);


  },[])

  return (
    <>
      <div className='app bg-gray-20'>
        <Navbar 
        isTopOfPage={isTopOfPage}
        
        ></Navbar>


        <p className='mt-96'>aaa</p>
        <p className='mt-96'>aaa</p>
        <p className='mt-96'>aaa</p>
     
      </div>
    </>
  )
}

export default App
