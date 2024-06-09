import React, { useState, createContext, useEffect, ReactNode } from 'react';

// Define an interface for the user object
interface User {
	id: number;
	name: string;
	email: string;
	// Add more user properties as needed
}

// Define an interface for the context value
interface AuthenticatedUserContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with default values
export const AuthenticatedUserContext =
	createContext<AuthenticatedUserContextType>({
		user: null,
		setUser: () => {},
	});

// Define the props for the provider
interface AuthenticatedUserProviderProps {
	children: ReactNode;
}

export const AuthenticatedUserProvider: React.FC<
	AuthenticatedUserProviderProps
> = ({ children }) => {
	const [user, setUser] = useState<User | null>(() => {
		const savedUser = localStorage.getItem('user');
		return savedUser ? JSON.parse(savedUser) : null;
	});

	useEffect(() => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
	}, [user]);

	return (
		<AuthenticatedUserContext.Provider value={{ user, setUser }}>
			{children}
		</AuthenticatedUserContext.Provider>
	);
};
