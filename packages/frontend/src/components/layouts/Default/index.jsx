import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Default } from './styles'
import useToast from '@/hooks/useToast'
// import Header from '@/components/Header'
// import Main from '@/components/Main'
// import Footer from '@/components/Footer'
// import Home from '@/components/pages/Home'
// import Calendar from '@/components/pages/Calendar'
// import CalendarDate from '@/components/pages/CalendarDate'
// import Dashboard from '@/components/pages/Dashboard'
// import ProductList from '@/components/pages/Product/List'
// import ProductCreate from '@/components/pages/Product/Create'
// import ProductUpdate from '@/components/pages/Product/Update'
// // import Statistics from '@/components/pages/Statistics'
// import Profile from '@/components/pages/Profile'
// import Workday from '@/components/pages/Workday'
// import Chat from '@/components/pages/Chat'
// import useUser from '@/hooks/useUser'
// import { useNavigate } from 'react-router-dom'

const DefaultLayout = () => {
	const { addToast } = useToast()

	// const { user } = useUser()
	// const navigate = useNavigate()

	// React.useEffect(() => {
	// 	if (!user) navigate('/auth/login')
	// }, [user])

	return (
		<Default>
			<button
				onClick={() => {
					addToast({
						type: 'success',
						message: 'Teste de toast, Teste de toast. Teste de toast',
					})
				}}
			>
				Add toast
			</button>
			<button
				onClick={() => {
					addToast({
						type: 'info',
						message: 'Teste de toast, Teste de toast. Teste de toast',
					})
				}}
			>
				Add toast info
			</button>
			<button
				onClick={() => {
					addToast({
						type: 'danger',
						message: 'Teste de toast, Teste de toast. Teste de toast',
					})
				}}
			>
				Add toast danger
			</button>
			<button
				onClick={() => {
					addToast({
						type: 'warning',
						message: 'Teste de toast, Teste de toast. Teste de toast',
					})
				}}
			>
				Add toast warning
			</button>
			<button
				onClick={() => {
					addToast({
						type: 'primary',
						message: 'Teste de toast, Teste de toast. Teste de toast',
					})
				}}
			>
				Add toast primary
			</button>
			{/* <Header />
			<section className="main">
				<Main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/calendar">
							<Route path=":year/:month" element={<Calendar />} />
							<Route path=":year/:month/:day" element={<CalendarDate />} />
						</Route>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/product">
							<Route path="list" element={<ProductList />} />
							<Route path="create" element={<ProductCreate />} />
							<Route path="update/:id" element={<ProductUpdate />} />
						</Route>
						<Route path="/statistics" element={<Statistics />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/workday" element={<Workday />} />
						<Route path="/chat" element={<Chat />} />
					</Routes>
				</Main>
				<Footer />
			</section> */}
		</Default>
	)
}

export default DefaultLayout
