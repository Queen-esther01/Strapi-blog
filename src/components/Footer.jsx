import React from 'react'

function Footer() {
    return (
        <p className='mt-24 mb-10 text-center text-sm'>
            Created with Strapi & React. {new Date().getFullYear()}
        </p>
    )
}

export default Footer