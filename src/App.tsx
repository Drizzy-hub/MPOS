import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Email, Landing, MissingPage } from './pages';
import './App.css';
import { AuthNavigator } from './navigation';

interface ProtectedRouteProps {
	user: User | null;
	children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

interface User {
	// Define the structure of your user object here
	uid: string;
	email: string;
	// Add other relevant properties
}

function App() {
	const [user, setUser] = useState<User | null>(null);

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
				<Route path="/" element={<Landing />} />
				<Route path="/verify-email" element={<Email />} />
				{AuthNavigator.map(({ path, Component, name }) => (
					<Route key={name} path={path} element={<Component />} />
				))}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute user={user}>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<MissingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
