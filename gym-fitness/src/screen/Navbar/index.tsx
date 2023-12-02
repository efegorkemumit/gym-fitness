import React from 'react'
import Logo from '../../assets/logo.png'

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = 'flex items-center justify-between'
  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
           <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-16`}>
                    
                    <img src={Logo}/>



                    <div className={`${flexBetween} w-full `}>

                            <div className={`${flexBetween} mt-4 gap-8 text-sm  `}>
                                <a href='#'> Home</a>
                                <a href='#'> Home</a>
                                <a href='#'> Home</a>
                                <a href='#'> Home</a>
                                

                            </div>


                    </div>
                    
                    
                </div>

            
            
            
            </div>



    </div>
  )
}

export default Navbar