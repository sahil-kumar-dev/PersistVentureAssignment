import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBlogs, updateBlogs, updateCurrentPage } from '../app/slice/blogSlice';

const Pagination = ({ currentPage, totalPages }) => {

    const dispatch = useDispatch()

    const blogs = useSelector(state=>state.blog.allBlogs)

    const pages = Array.from({ length: Math.min(blogs.length/15, 10) }, (_, index) => index + 1);

    function updatePage(page){
        dispatch(updateCurrentPage(page))
        dispatch(updateBlogs(blogs))
    }

    return (
        <div className="flex justify-center space-x-3 dark:text-gray-800">
            {pages.map((page) => (
                <button onClick={() => updatePage(page)} key={page} type="button" title={`Page ${page}`} className={`inline-flex items-center justify-center w-8 h-8 text-sm ${currentPage === page ? 'font-semibold border-violet-600 dark:bg-violet-600' : 'border'} rounded shadow-md dark:bg-gray-50 dark:border-gray-100`}>
                    {page}
                </button>
            ))}
        </div>
    )
}

export default Pagination