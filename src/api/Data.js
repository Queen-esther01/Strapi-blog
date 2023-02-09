import axios from 'axios';

export const fetchIntroductionData = async() => {
    const { data } = await axios.get('http://localhost:1337/api/introduction?populate=*',
        {
            headers : {
                Authorization: `bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`
            }
        }
    )
    return data;
}

export const fetchBlogData = async() => {
    const { data } = await axios.get('http://localhost:1337/api/blog-posts?populate=*',
        {
            headers : {
                Authorization: `bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`
            }
        }
    )
    return data;
}