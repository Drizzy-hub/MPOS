import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../../firebase';
import {
	applyActionCode,
	signInWithEmailAndPassword,
	User,
} from 'firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import { Header } from '../../components';
import { FormData } from './Signup';

const VerifyEmail: React.FC = () => {
	const [verified, setVerified] = useState<boolean>(false);
	const [checkingVerification, setCheckingVerification] =
		useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();
	const formData = location.state?.formData as FormData;

	useEffect(() => {
		const verifyEmail = async () => {
			const params = new URLSearchParams(location.search);
			const oobCode = params.get('oobCode');

			if (oobCode) {
				try {
					await applyActionCode(auth, oobCode);
					setVerified(true);
				} catch (error) {
					console.error('Error verifying email:', error);
					setVerified(false);
				}
			}
		};

		verifyEmail();
	}, [location.search]);

	const completeSignup = async (user: User) => {
		try {
			await setDoc(doc(db, 'users', user.uid), {
				id: user.uid,
				storeName: formData.storeName,
				firstName: formData.firstName,
				lastName: formData.lastName,
				phone: formData.phone,
				address: formData.address,
				state: formData.state,
				country: formData.country,
			});
			await signInWithEmailAndPassword(auth, formData.email, formData.password);
		} catch (error) {
			alert('Error completing signup');
			navigate('/signup');
		}
	};

	const handleLoginClick = async () => {
		setCheckingVerification(true);
		if (auth.currentUser && verified) {
			await completeSignup(auth.currentUser);
			localStorage.setItem('user', JSON.stringify(auth.currentUser));
			navigate('/dashboard');
		} else {
			setCheckingVerification(false);
			alert('Please verify your email first.');
		}
	};

	return (
		<>
			<Header />
			<div className="mx-auto px-5 md:px-10 lg:px-20 pb-10">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
					You're almost done!
				</h1>
				<p className="my-5 text-center text-[#151515]">
					We have sent you an email with a verification link. To have access to
					your account, kindly verify your email address.
				</p>
				<div className="text-center">
					<button
						disabled={!verified || checkingVerification}
						className={`border ${
							verified
								? 'border-primary bg-primary'
								: 'border-gray-300 bg-gray-300'
						} text-white py-2 px-8 rounded-md`}
						onClick={handleLoginClick}
					>
						{checkingVerification ? 'Checking...' : 'Login'}
					</button>
				</div>
			</div>
		</>
	);
};

export default VerifyEmail;
