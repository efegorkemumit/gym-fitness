import React from 'react'
import Htext from '../../shared/Htext'
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png'

type Props = {}

const Contact = (props: Props) => {

  const formclassname = "mb-5 bg-primary-300 px-5 py-3 w-full rounded-lg placeholder-white";
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
      <div>

        <div className='md:w-3/5'>
          <Htext>JOIN NOW TO GET SHAPE</Htext>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe eius alias rerum voluptatibus consequatur laudantium libero accusantium quisquam non, nostrum asperiores veritatis quis. Odit magni corporis cupiditate error sit!
          </p>


        </div>

        <div className='mt-10 flex gap-8'>
          <div className='mt-10 flex-1/2'>

            <form>
              <input 
              className={formclassname}
              placeholder='name'
              required>

              </input>

              <input 
              className={formclassname}
              placeholder='name'
              required>
                
              </input>

              <textarea 
                className={formclassname}
                rows={8}
              >

              </textarea>

              <button
              type='submit'
              className='mt-5 rounded-lg font-bold text-xl hover:text-white hover:bg-secondary-700 bg-secondary-400 px-20 py-3 transition duration-200 hover:duration-500 h'>
send
              </button>
              

            </form>


          </div>

          <div className='flex-1/2 relative md:ml-48 '>


            <img src={ContactUsPageGraphic} className='w-full rounded-xl'></img>


          </div>



        </div>




      </div>




    </section>
  )
}

export default Contact