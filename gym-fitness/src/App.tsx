import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './screen/Navbar'
import Home from './screen/Home';
import Benefits from './screen/Benefit';
import OurClasses from './screen/OurClasses';
import Contact from './screen/Contact';
import Footer from './screen/Footer';

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScrool);
    return () => window.removeEventListener("scroll", handleScrool);


  }, [])

  return (
    <>
      <div className='app bg-gray-20'>
        <Navbar
          isTopOfPage={isTopOfPage}

        ></Navbar>

        <Home></Home>
        <Benefits></Benefits>
        <OurClasses></OurClasses>

        <Contact></Contact>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
