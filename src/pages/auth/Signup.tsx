import React from 'react';
import { Button, Header, PasswordInput, TextInput } from '../../components';
import { H1, P } from '../../utils/Typography';

const Signup = () => {
	return (
		<>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					marginTop: '6rem',
					alignItems: 'center',
				}}
			>
				<H1>Let's create your account</H1>
				<div style={{ width: 780, marginTop: 100 }}>
					<TextInput label="Email" placeholder="Input your Email" />
					<div style={{ marginTop: 47 }}>
						<PasswordInput
							label="Confirm Password"
							placeholder="Input your Password"
						/>
					</div>
					<div style={{ marginTop: 47 }}>
						<PasswordInput
							margin={715}
							label="Password"
							placeholder="Input your Password"
						/>
					</div>
					<P fontWeight="700" fontSize="16px" marginTop="19px">
						Forgot Password?
					</P>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						marginTop: 100,
					}}
				>
					<Button
						style={{ color: '#ffffff', borderRadius: 4, width: 348 }}
						title="Log in"
						to="/dashboard"
					/>
					<P marginTop="37px">
						New here?{' '}
						<a
							style={{
								color: '#000000',
								fontWeight: '700',
								textDecoration: 'none',
							}}
							href="/signup"
						>
							Register
						</a>
					</P>
				</div>
			</div>
		</>
	);
};

export default Signup;
