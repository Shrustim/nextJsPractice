import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <div>
         <br/>
         <style jsx>
           {`
            h1{
              color:red;
            }
           `}
         </style>
         <h1>about</h1>
         <Image
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
          />
          <br/> <br/> <br/>
          <Image
            src="https://images.pexels.com/photos/13058811/pexels-photo-13058811.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            quality={100}
          />
          
          <img src="https://images.pexels.com/photos/265940/pexels-photo-265940.jpeg" width="700"  height="500"/> 
         
          {/* <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" width="700"  height="500"/> 
          <img src="https://images.pexels.com/photos/13058811/pexels-photo-13058811.jpeg" width="700"  height="500"/> */}
         
       </div>
  )
}
export default About;