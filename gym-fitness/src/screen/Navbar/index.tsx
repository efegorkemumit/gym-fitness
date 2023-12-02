import React from 'react'
import Logo from '../../assets/logo.png'
import Link from './Link'
import { SelectedPage } from '../../shared/types'

type Props = {
    setSelectedPage:(value:SelectedPage)=>void


}

const Navbar = ({setSelectedPage}: Props) => {
    const flexBetween = 'flex items-center justify-between'
  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
           <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-16`}>
                    
                    <img src={Logo}/>



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
                    
                    
                </div>

            
            
            
            </div>



    </div>
  )
}

export default Navbar