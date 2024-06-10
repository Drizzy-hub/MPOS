import React from 'react';

const Dashboard: React.FC = () => {
	const storedUser = localStorage.getItem('user');
	const user = storedUser ? JSON.parse(storedUser) : null;

	return (
		<div>
			{user ? <p>Welcome {user.email}</p> : <p>Loading user data...</p>}
		</div>
	);
};

export default Dashboard;
