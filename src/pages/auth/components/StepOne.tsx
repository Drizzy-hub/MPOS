// src/components/StepOne.tsx
import React from 'react';
import { StepProps } from '../Signup';
import { PasswordInput, TextInput } from '../../../components';

const StepOne: React.FC<StepProps> = ({ formData, handleChange }) => (
	<div>
		<TextInput
			label="Email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			placeholder="Input your Email"
		/>
		<div className="mt-10">
			<PasswordInput
				label="Password"
				name="password"
				value={formData.password}
				onChange={handleChange}
				placeholder="Input your Password"
			/>
		</div>
		<div className="mt-10">
			<PasswordInput
				label="Confirm Password"
				name="confirmPassword"
				value={formData.confirmPassword}
				onChange={handleChange}
				placeholder="Input your Password"
			/>
		</div>
	</div>
);

export default StepOne;
