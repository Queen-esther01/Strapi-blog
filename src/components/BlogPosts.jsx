import React from 'react'
import { baseurl } from '../api/baseurl'

function BlogPosts({data}) {
    return (
        <div className='mt-0'>
            <div className='grid lg:grid-cols-2 gap-24'>
                {
                    data?.map(data => (
                        <div key={data.id} className=''>
                            <img className='rounded-md' src={`${baseurl}${data.attributes.image.data.attributes.url}`}/>
                            <h2 className='text-center mt-3 text-lg text-gray-800 font-semibold'>{ data.attributes.title }</h2>
                            <h2 className='text-center mt-5 text-md leading-relaxed'>{ data.attributes.excerpt }</h2>
                            <div className='text-center mt-6'>
                                <button className=' bg-gray-800 text-white rounded-md px-10 py-4'>Read more</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default BlogPosts