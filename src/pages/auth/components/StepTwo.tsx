// src/components/StepTwo.tsx
import React from 'react';

import { StepProps } from '../Signup';
import { TextInput } from '../../../components';

const StepTwo: React.FC<StepProps> = ({ formData, handleChange }) => (
	<div>
		<TextInput
			label="Store Name"
			name="storeName"
			value={formData.storeName}
			onChange={handleChange}
			placeholder="Input your Store Name"
		/>
		<div className="mt-10">
			<div className="flex flex-row gap-6">
				<TextInput
					label="First Name"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="Input your First Name"
				/>
				<TextInput
					label="Last Name"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Input your Last Name"
				/>
			</div>
		</div>
		<div className="mt-10">
			<TextInput
				label="Phone"
				name="phone"
				value={formData.phone}
				onChange={handleChange}
				placeholder="Input your Phone number"
			/>
		</div>
		<div className="mt-10">
			<TextInput
				label="Address"
				name="address"
				value={formData.address}
				onChange={handleChange}
				placeholder="Input your Address"
			/>
		</div>
		<div className="mt-10">
			<TextInput
				label="State"
				name="state"
				value={formData.state}
				onChange={handleChange}
				placeholder="Input your State"
			/>
		</div>
		<div className="mt-10">
			<TextInput
				label="Country"
				name="country"
				value={formData.country}
				onChange={handleChange}
				placeholder="Nigeria"
				color="#054A49"
			/>
		</div>
	</div>
);

export default StepTwo;
