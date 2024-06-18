import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {

    const [article, setArticle] = useState({})

    const { slug } = useParams()
    const title = slug?.split('-').join(' ')

    async function fetchArticle() {
        const response = await fetch(`https://newsapi.org/v2/everything?qInTitle=${title}&apiKey=83beebba1bf049c1be5af67e4b448f75`)
        const data = await response.json()
        setArticle(data?.articles[0])
        console.log(article)
    }

    useEffect(() => {
        fetchArticle()
    }, [])

    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={article.urlToImage ? article.urlToImage : "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg"} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{article.title}</a>
                        <p className="text-xs dark:text-gray-600">By
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{article.author}</a>
                        </p>
                    </div>
                    <div className="dark:text-gray-800">
                        <p>{article.description}</p>
                        <p>{article.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage