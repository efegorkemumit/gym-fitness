import React from 'react'
import Htext from '../../shared/Htext'
import { BenefitTypes } from '../../shared/types'
import { HomeIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import BenefitDesing from './benefit'

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
        
       <div className='md:w-3/5'>

                <Htext>More than just gym</Htext>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo autem veniam maxime sint nihil voluptate fuga doloribus distinctio voluptatibus, excepturi, asperiores temporibus officiis iste quos deleniti magni quia error.</p>


       </div>

       <div className='md:flex items-center justify-between mt-2'>

        {benefits.map((benefit:BenefitTypes)=>(
            <BenefitDesing
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}

            
            
            />

           


        ))}


       </div>
    

    
    
    </section>
  )
}

export default Benefits