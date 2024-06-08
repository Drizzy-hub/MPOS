import React, { useState, forwardRef, InputHTMLAttributes } from 'react';
import './input.css';
import { P } from '../utils/Typography';
import { Eye, Eyeoff } from '../assets';
import { Link } from 'react-router-dom';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	margin?: number;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
	({ label, ...inputProps }, ref) => {
		return (
			<div className="input-container">
				<P fontWeight="600" fontSize="16px">
					{label}
				</P>
				<input className="input" ref={ref} {...inputProps} />
			</div>
		);
	}
);

const PasswordInput = forwardRef<HTMLInputElement, Props>(
	({ label, margin, ...inputProps }, ref) => {
		const [show, setShow] = useState(false);

		return (
			<div className="input-container">
				<div className="row">
					<div style={{ marginRight: margin }}>
						<P fontWeight="600" fontSize="16px">
							{label}
						</P>
					</div>
					<div
						className="icon"
						onClick={() => {
							setShow(!show);
						}}
					>
						{show ? <Eyeoff /> : <Eye />}
					</div>
				</div>
				<input
					className="input"
					ref={ref}
					// type={show ? 'text' : 'password'}
					{...inputProps}
				/>
			</div>
		);
	}
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	to: string;
	title: string;
	color?: string;
	bgColor?: string;
	fontWeight?: string;
	fontSize?: string;
}
const Button: React.FC<ButtonProps> = ({
	to,
	title,
	color,
	bgColor,
	fontWeight,
	fontSize,
	...rest
}) => {
	return (
		<Link to={to} className="button-link">
			<button
				className="primary-button"
				style={{ color, backgroundColor: bgColor, fontWeight, fontSize }}
				{...rest}
			>
				{title}
			</button>
		</Link>
	);
};
export { TextInput, PasswordInput, Button };
