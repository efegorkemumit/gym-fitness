import React from 'react'

type Props = {
    name:string,
    description:string,
    image:string
}

const Class = ({name, description, image}: Props) => {
  return (
    <div className='w-full md:w-1/4 mb-4 '>
        <img src={image} className="w-full h-auto rounded-3xl p-2 z-30 opacity-75
        hover:opacity-100 transition duration-300 hover:duration-500"/>

        <div className='mt-2'>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='text-gray-400'>{description}</p>
        </div>


    </div>
  )
}

export default Class