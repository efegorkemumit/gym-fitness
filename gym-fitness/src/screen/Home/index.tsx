import React from 'react'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import HomePageText from '../../assets/HomePageText.png'
import {motion} from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '../../shared/types';
import ActionButton from '../../shared/ActionButton';


type Props = {
    setSelecetedPage: (value:SelectedPage)=>void;
}

const Home = ({setSelecetedPage}: Props) => {
  return (
    <section id="home" className='gağ-16 bg-gray-20 py-10 md:h-full md:pb-0'>

    <motion.div
    className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>

        <div className='z-10 mt-32 md:basis-3/5'>
            <div className='relative'>
                <div className='before:absolute before:-top-10 before:ml-4 before:-z-50  md:before:content-sliderbgtext'>
                    <img src={HomePageText}></img>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, necessitatibus tenetur architecto amet doloribus debitis enim vel expedita eius aliquam quasi deleniti, velit error odit cupiditate provident quidem ratione quos.
                </p>

                <div className='mt-8 flex items-center gap-8'>
                    <ActionButton setSelecetedPage={setSelecetedPage}>
                        Join Now
                    </ActionButton>

                    <AnchorLink 
                    className="text-sm font-bold cursor-pointer underline text-primary-500 hover:text-primary-300">
                        Learn More </AnchorLink>

                </div>


            </div>


        </div>

        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={HomePageGraphic} />
        </div>




    </motion.div>
    </section>
  )
}

export default Home