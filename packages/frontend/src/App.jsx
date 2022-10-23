import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/components/layouts/Default'
import Authentication from '@/components/layouts/Authentication'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/auth/*" element={<Authentication />} />
				<Route path="*" element={<DefaultLayout />} />
			</Routes>
		</Router>
	)
}

export default App
