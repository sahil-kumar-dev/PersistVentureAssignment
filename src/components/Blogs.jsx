import React from 'react'
import { useSelector } from 'react-redux'
import BlogCard from './common/BlogCard'
import LoadingSkeleton from './common/LoadingSkeleton'

const Blogs = () => {

    const { blogs, loading } = useSelector(state => state.blog)
    return (

        loading ?
            <LoadingSkeleton />
            :
            <div className='grid grid-cols-3 max-w-7xl mx-auto gap-6'>
                {
                    blogs.slice(0, 100).map(item => (
                        <BlogCard {...item} />
                    ))
                }
            </div>

    )
}

export default Blogs