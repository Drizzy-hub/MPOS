// src/pages/Signup.tsx
import React, { useState, ChangeEvent } from 'react';
import { Header } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

export interface FormData {
	email: string;
	password: string;
	confirmPassword: string;
	storeName: string;
	firstName: string;
	lastName: string;
	phone: string;
	address: string;
	state: string;
	country: string;
}

export interface StepProps {
	formData: FormData;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Signup: React.FC = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		confirmPassword: '',
		storeName: '',
		firstName: '',
		lastName: '',
		phone: '',
		address: '',
		state: '',
		country: 'Nigeria',
	});
	const navigate = useNavigate();

	const handleNext = async () => {
		if (currentStep === 1) {
			setCurrentStep(2);
		} else if (currentStep === 2) {
			await handleSignup();
		}
	};

	const handleBack = () => {
		if (currentStep === 1) {
			navigate('/');
		} else {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSignup = async () => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				formData.email,
				formData.password
			);
			navigate('/verify-email');
		} catch (error) {
			console.log('Error signing up user:', error);
		}
	};

	return (
		<>
			<Header />
			<div className="mx-auto px-5 md:px-10 lg:px-20 pb-10">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
					Let's create your account
				</h1>
				<p className="my-5 text-center text-[#151515]">
					Signing up on MPOS is fast and free--No credit card required, no
					commitments or long-term contracts.
				</p>
				<div className="text-center mb-10">
					<span className={`indicator ${currentStep === 1 ? 'active' : ''}`}>
						Step 1
					</span>
					<span className={`indicator ${currentStep === 2 ? 'active' : ''}`}>
						Step 2
					</span>
				</div>
				<div className="mt-10 lg:w-2/4 mx-auto">
					{currentStep === 1 ? (
						<StepOne formData={formData} handleChange={handleChange} />
					) : (
						<StepTwo formData={formData} handleChange={handleChange} />
					)}
				</div>
				<p className="text-[#151515] text-center mt-5">
					By signing up, you agree to the MPOS{' '}
					<span className="!text-[red] cursor-pointer">Terms of Service</span>,
					Privacy and Cookie Notice.
				</p>
				<div className="flex items-center flex-col justify-center mt-10">
					<div className="flex items-center justify-center gap-10">
						<button
							className="border border-primary bg-transparent text-primary py-2 px-8 rounded-md"
							onClick={handleBack}
						>
							Back
						</button>
						<button
							className="border border-primary bg-primary text-white py-2 px-8 rounded-md"
							onClick={handleNext}
						>
							{currentStep === 1 ? 'Next' : 'Activate'}
						</button>
					</div>
					{currentStep === 2 && (
						<p className="mt-3">
							Already have an account?{' '}
							<Link className="font-bold text-black" to="/login">
								Sign In
							</Link>
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Signup;
