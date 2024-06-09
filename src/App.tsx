import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Email, Landing, MissingPage } from './pages';
import './App.css';
import { AppNavigator, AuthNavigator } from './navigation';

const formData = {
	email: '',
	password: '',
	confirmPassword: '',
	storeName: '',
	firstName: '',
	lastName: '',
	phone: '',
	address: '',
	state: '',
	country: '',
};

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// Retrieve user from local storage
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route key={'LandingPage'} path={'/'} element={<Landing />} />
				<Route path="/verify-email" element={<Email formData={formData} />} />
				{AuthNavigator.map(({ path, Component, name }) => (
					<Route
						key={name}
						path={path}
						element={!user ? <Component /> : <Navigate to="/dashboard" />}
					/>
				))}
				{AppNavigator.map(({ path, Component, name }) => (
					<Route
						key={name}
						path={path}
						element={user ? <Component /> : <Navigate to="/login" />}
					/>
				))}
				<Route path="*" element={<MissingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
