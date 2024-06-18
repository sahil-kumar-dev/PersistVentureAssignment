import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ urlToImage, title, description }) => {

    const slug = title.split(' ').join('-')

    return (
        <Link to={`/blog/${slug}`}>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={urlToImage ? urlToImage : "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{title}</h3>
                        <p className="leading-snug dark:text-gray-600">
                            {description && description.substring(0, 150)}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard