import React from 'react'
import Htext from '../../shared/Htext'
import { BenefitTypes } from '../../shared/types'
import { HomeIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import BenefitDesing from './benefit'
import {motion} from "framer-motion"

type Props = {}

const benefits:Array<BenefitTypes>=[
    {
        icon:<HomeIcon className='h-6 w-6 text-black'/>,
        title:'What is Lorem Ipsum?',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        icon:<UserIcon className='h-6 w-6 text-black'/>,
        title:'What is2 Lorem Ipsum?',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        icon:<PhoneIcon className='h-6 w-6 text-black'/>,
        title:'What is3 Lorem Ipsum?',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },

]
const Benefits = (props: Props) => {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
        
        <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: -50 },
                 visible: { opacity: 1, x: 0 },
               }}
               >
       <div className='md:w-3/5'>

                <Htext>More than just gym</Htext>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo autem veniam maxime sint nihil voluptate fuga doloribus distinctio voluptatibus, excepturi, asperiores temporibus officiis iste quos deleniti magni quia error.</p>


       </div>
       </motion.div>

       <div className='md:flex items-center justify-between mt-2'>

        {benefits.map((benefit:BenefitTypes)=>(

            <motion.div

            key={benefit.title}
            initial={{ opacity: 0, y: -20 }} // Initial state
            animate={{ opacity: 1, y: 0 }}   // Animation state
            exit={{ opacity: 0, y: -20 }}    // Exit state (for unmounting)

            
            >
            <BenefitDesing
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}

            
            
            />
        </motion.div>
           


        ))}


       </div>
    

    
    
    </section>
  )
}

export default Benefits