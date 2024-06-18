import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { fetchBlogByCategory } from "../../app/slice/blogSlice"

const BlogCatergory = [
    {
        id: 1,
        category: 'Sports'
    },
    {
        id: 2,
        category: 'Entertainment'
    },
    {
        id: 3,
        category: 'Technology'
    },
    {
        id: 4,
        category: 'Health'
    },
    {
        id: 5,
        category: 'Finance'
    },
    {
        id: 6,
        category: 'Travel'
    },
    {
        id: 7,
        category: 'Food'
    },
    {
        id: 8,
        category: 'Fashion'
    },
    {
        id: 9,
        category: 'Education'
    },
    {
        id: 10,
        category: 'Business'
    },
]

const Navbar = () => {
    const [isCategoryHovered, setIsCategoryHovered] = useState(false)

    const dispatch = useDispatch()

    function fetchBlog(category){
        dispatch(fetchBlogByCategory(category))
    }

    return (
        <div className="bg-gray-100 sticky top-0">
            <div className="max-w-7xl px-4 md:px-0 mx-auto py-4 flex justify-between">
                <div className="">
                    <Link to={'/'}>
                        <img src="/times now.webp" alt="Times Now logo" className=" h-10" />
                    </Link>
                </div>
                <div className="flex gap-6">
                    <Link to={'/'}>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md ">Home</button>
                    </Link>
                    <div onMouseEnter={() => setIsCategoryHovered(true)} onMouseLeave={() => setIsCategoryHovered(false)}>
                        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md ">Category</button>
                        {isCategoryHovered && (
                            <div className="absolute top-full -mt-4 bg-white shadow-md rounded-md p-4 flex flex-col gap-4">
                                {
                                    BlogCatergory.map(({ id, category }) => (
                                        // <Link to={`/category/${category}`} key={id}>
                                            <button className="border-b border-b-gray-300" onClick={()=>fetchBlog(category)}>{category}</button>
                                        // </Link>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar