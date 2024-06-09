import React, { useContext, useState } from 'react';
import { Button, Header, PasswordInput, TextInput } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthenticatedUserContext } from '../../provider';
import { auth } from '../../firebase';

const Login = () => {
	const { setUser } = useContext(AuthenticatedUserContext);
	const [inputValue, setInputValue] = useState({ email: '', password: '' });
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const onLogin = async () => {
		try {
			if (inputValue.email !== '' && inputValue.password !== '') {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					inputValue.email,
					inputValue.password
				);
				const user = userCredential.user;
				setUser(user);
				localStorage.setItem('user', JSON.stringify(user));
				navigate('/dashboard');
			} else {
				alert('Please fill in both fields');
			}
		} catch (error: any) {
			console.log(error);
			alert(error.message);
		}
	};

	return (
		<>
			<Header />
			<div className="mx-auto px-5 md:px-10 lg:px-20 pb-10">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
					Welcome back! Sign in to your account
				</h1>
				<div className="mt-10 lg:w-2/4 mx-auto">
					<TextInput
						label="Email"
						name="email"
						value={inputValue.email}
						onChange={handleChange}
						placeholder="Input your Email"
					/>
					<div className="mt-10">
						<PasswordInput
							name="password"
							value={inputValue.password}
							onChange={handleChange}
							label="Password"
							placeholder="Input your Password"
						/>
					</div>
					<p className="cursor-pointer font-bold mt-5">Forgot Password?</p>
				</div>
				<div className="flex items-center flex-col justify-center mt-10">
					<Button
						to=""
						style={{ color: '#ffffff', borderRadius: 4, width: 348 }}
						title="Log in"
						onClick={onLogin}
					/>
					<p className="mt-3">
						New here?{' '}
						<Link className="font-bold text-black" to="/signup">
							Register
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
