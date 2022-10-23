import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Authentication, Logo, P } from './styles'
import Login from '@/components/pages/Login'
import Signup from '@/components/pages/Signup'
import ForgotPassword from '@/components/pages/ForgotPassword'
import ResetPassword from '@/components/pages/ResetPassword'
import useUser from '@/hooks/useUser'
import { useNavigate } from 'react-router-dom'

const AuthenticationLayout = () => {
	const { user } = useUser()
	const navigate = useNavigate()

	React.useEffect(() => {
		if (user) navigate('/')
	}, [user])

	return (
		<Authentication>
			<Logo src="/logo.svg" />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
			<P>
				powered by&nbsp;
				<a target="blank" href="https://harecode.com.ar">
					Harecode
				</a>
			</P>
		</Authentication>
	)
}

export default AuthenticationLayout
