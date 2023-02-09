import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchBlogData, fetchIntroductionData } from '../api/Data'
import Hero from './Hero'
import BlogPosts from './BlogPosts'
import Footer from './Footer'

function Container() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['introduction'],
        queryFn: () => fetchIntroductionData(),
        retry: false, //react query tries 3 times before throwing error, set retry to false so it throws error immediately
        staleTime: 10 * (60 * 1000), //10 minuted
        cacheTime: 10 * (60 * 1000), //15 minutes
        refetchOnWindowFocus: false
    })

    const { isLoading:isBlogDataLoading, data:blogData } = useQuery({
        queryKey: ['blog'],
        queryFn: () => fetchBlogData(),
        retry: false, //react query tries 3 times before throwing error, set retry to false so it throws error immediately
        staleTime: 10 * (60 * 1000), //10 minuted
        cacheTime: 10 * (60 * 1000), //15 minutes
        refetchOnWindowFocus: false
    })

    if(isLoading || isBlogDataLoading) return <p>Page is loading data...</p>
    return (
        <div > 
            <Hero data={data.data.attributes}/>
            <div className='w-96 mx-auto md:w-3/4 md:max-w-xl lg:max-w-3xl xl:max-w-5xl'>
                <BlogPosts data={blogData.data}/>
                <Footer/>
            </div>
        </div>
    )
}

export default Container