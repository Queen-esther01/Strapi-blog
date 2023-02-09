import React from 'react'
import { baseurl } from '../api/baseurl'

function Hero({ data }) {
    return (
        <>
            <div className='hero w-full h-96 relative text-center'>
                <div className='absolute bg-gray-900 opacity-70 h-full w-full'></div>
                <img className=' w-full h-full object-cover object-bottom' src={`${baseurl}${data.image.data.attributes.url}`}/>
                <div className='absolute w-64 mx-auto left-0 right-0 top-32 bottom-0'>
                    <img className='mx-auto' src={'/fork.png'} width={50}  />
                    <h1 className='leading-normal font-medium text-gray-50 mt-5'>{data.title}</h1>
                </div>
            </div>
            <p className='mt-10 w-80 lg:w-96 mx-auto text-center leading-normal'>{ data.description}</p>
            <div className='border-red-500 w-1/2 max-w-xs mx-auto'>
                <img className='object-cover object-center w-full h-full' src={'/swirl.png'} height={100}/>
            </div>
            
            {/* <div className='text-center mt-10 '>
                <h1 className='font-medium'>{data.title}</h1>
                <div className='w-2/3 mx-auto mt-10'>
                    <img className='rounded-lg' src={'http://localhost:1337' +  data.image.data.attributes.url}/>
                </div>
                <p className='mt-5 w-80 mx-auto'>{ data.description}</p>
            </div> */}
        </>
    )
}

export default Hero