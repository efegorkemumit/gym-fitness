import React from 'react'
import Logo from '../../assets/logo.png'
import Link from './Link'
import { SelectedPage } from '../../shared/types'
import usemediaQuery from '../../hooks/usemediaQuery'
import { Bars3Icon } from '@heroicons/react/20/solid'

type Props = {
    isTopOfPage:boolean;
    setSelectedPage:(value:SelectedPage)=>void


}

const Navbar = ({isTopOfPage, setSelectedPage}: Props) => {
    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreens = usemediaQuery("(min-width:1060px)");
    const navBarBackGround = isTopOfPage ? "" : "bg-primary-100 drop-shadow shadow-lg"
  return (
    <div className={`${flexBetween} ${navBarBackGround} fixed top-0 z-30 w-full py-6`}>
           <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-16`}>
                    
                    <img src={Logo}/>

                {isAboveMediumScreens ? (
  <div className={`${flexBetween} w-full `}>

  <div className={`${flexBetween} mt-4 gap-8 text-sm  `}>
    <Link page='Home' 
    selectedPage={SelectedPage}
    setSelectedPage={setSelectedPage}
    ></Link>

  <Link page='Benefits' 
    selectedPage={SelectedPage}
    setSelectedPage={setSelectedPage}
    ></Link>


<Link page='Our Classes' 
    selectedPage={SelectedPage}
    setSelectedPage={setSelectedPage}
    ></Link>


  <Link page='Contact Us' 
    selectedPage={SelectedPage}
    setSelectedPage={setSelectedPage}
    ></Link>


      

  </div>


</div>

                ):
                (

                    <button className='rounded-full bg-secondary-500 p-2'>
                        <Bars3Icon className='w-6 h-6'></Bars3Icon>

                    </button>

                  
                )
            
            
            }

                  
                    
                    
                </div>

            
            
            
            </div>



    </div>
  )
}

export default Navbar