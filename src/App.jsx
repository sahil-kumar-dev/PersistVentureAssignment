import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { fetchAllBlogs } from './app/slice/blogSlice'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllBlogs())
	}, [])


	return (
		<main className=' space-y-8'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/blog/:slug' element={<ArticlePage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</main>
	)
}

export default App