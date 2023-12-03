import React from 'react'
import { ClassType } from '../../shared/types'
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
import image7 from '../../assets/7.png'
import image8 from '../../assets/8.png'
import image9 from '../../assets/9.png'
import image10 from '../../assets/10.png'
import Htext from '../../shared/Htext'
import Class from './Class'
import {motion} from "framer-motion"

const classes : Array<ClassType> = [
    {
        name:"Weightlifting",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image1,
    },
    {
        name:"Cardiovascular Exercise",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image2,
    },
    {
        name:"Yoga",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image3,
    },
    {
        name:"Pilates",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image4,
    },

    {
        name:"CrossFit",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image5,
    },

    {
        name:"High-Intensity Interval Training",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image6,
    },
    {
        name:"Spinning ",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image7,
    },
    {
        name:"Boxing  ",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image8,
    },
    {
        name:"Zumba",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image9,
    },

    {
        name:"Gym",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image10,
    },
    





]


type Props = {}

const OurClasses = (props: Props) => {
  return (
    <seciton id="ourclasses" className="w-full mt-14 py-52">

        <div className='mx-auto w-5/6'>

                <div className='md:w-3/5 mb-6'>
                    <Htext>
                        Our clases
                    </Htext>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi necessitatibus blanditiis quibusdam debitis fuga voluptatibus officia quo culpa molestias explicabo aliquam veritatis corporis, libero facilis iste ipsa quisquam facere quaerat!
                    </p>



                </div>

                <div >
                <motion.div className='flex flex-wrap justify-center items-center text-center'
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ duration: 0.5 }}
                       variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 },
                       }}
                       >
                   {classes.map((item:ClassType)=>(
                     
                       

<Class
    key={item.name}
    name={item.name}
    description={item.description}
    image={item.image}>

</Class>


                   ))}

</motion.div>
                </div>


        </div>
        




    </seciton>
  )
}

export default OurClasses