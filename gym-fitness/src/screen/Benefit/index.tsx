import React from 'react'
import Htext from '../../shared/Htext'
import { BenefitTypes, SelectedPage } from '../../shared/types'
import { HomeIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import BenefitDesing from './benefit'
import {motion} from "framer-motion"
import  BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'
import ActionButton from '../../shared/ActionButton'

type Props = {
    setSelecetedPage: (value:SelectedPage)=>void;
}

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
const Benefits = ({setSelecetedPage}: Props) => {
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

       <div className='mt-16 items-center justify-between gap-20 md:flex'>

        <img src={BenefitsPageGraphic} />



        <div>
            <div className='relative mt-24'>

                <div className='before:content-abstractwaves before:absolute before:-top-14 before:left-20'>
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
                    <Htext>
                        Million of member very happy getting
                    </Htext>


                    <span className='text-gray-50 font-bold flex'>

                        <a className='flex mr-2 bg-primary-500 px-3 py-2 rounded-xl'>Fit</a>
                        <a className='flex mr-2 bg-primary-500 px-3 py-2 rounded-xl'>Gym</a>
                        <a className='flex mr-2 bg-primary-500 px-3 py-2 rounded-xl'>Fitness</a>
                        <a className='flex mr-2 bg-primary-500 px-3 py-2 rounded-xl'>Body</a>



                    </span>
                    </motion.div>
                    <motion.div className='mt-8 md:flex items-center gap-8'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                 >
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corrupti laudantium natus modi at eius soluta tempore? Earum sunt nesciunt quod, cum magni aperiam, debitis non suscipit maiores officia aliquam.
                    </p>
                    <p className='my-5'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                   
</p>
</motion.div>
<motion.div className='mt-8 flex items-center gap-8'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                 >
                    <ActionButton setSelecetedPage={setSelecetedPage}>
                        Join Now
                    </ActionButton>


                </motion.div>




                </div>

            
            </div>
        

        </div>

       </div>
    

    
    
    </section>
  )
}

export default Benefits