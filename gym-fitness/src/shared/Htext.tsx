import React from 'react'

type Props = {
    children:React.ReactNode

}

const Htext = ({children}: Props) => {
  return (
    <h1 className='uppercase text-3xl font-bold mb-4 mt-2'>{children}</h1>
  )
}

export default Htext