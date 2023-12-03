import React from 'react'

type Props = {

    icon:JSX.Element;
    title:string;
    description:string;
}

const BenefitDesing = ({icon, title, description}: Props) => {
  return (
    <div className='mt-5 md:mr-5 rounded-md border-2 text-center px-5 py-16'>

        <div className='mb-4 flex justify-center'>

            <div className=' text-center rounded-full border-2 p-4 border-gray-100 bg-primary-100'>

                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>


    </div>
  )
}

export default BenefitDesing