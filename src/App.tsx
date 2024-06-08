import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppNavigator, AuthNavigator } from './navigation';
import { Landing, Login, MissingPage, Signup } from './pages';
import { AuthenticatedUserContext } from './provider';

function App() {
	const { user } = useContext(AuthenticatedUserContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route key={'LandingPage'} path={'/'} element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				{/* {AuthNavigator.map(({ path, Component, name }) => (
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
        ))} */}
				<Route path="*" element={<MissingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
