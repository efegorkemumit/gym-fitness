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
        name:"Zumba  ",
        description:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        image:image9,
    },
    





]


type Props = {}

const OurClasses = (props: Props) => {
  return (
    <seciton id="ourclasses">index</seciton>
  )
}

export default OurClasses