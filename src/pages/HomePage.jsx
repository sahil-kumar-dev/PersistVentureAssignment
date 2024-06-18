import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const HomePage = () => {
  return (
    <div className='space-y-6'>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default HomePage