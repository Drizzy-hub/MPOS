import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../assets';
import { P } from '../utils/Typography';
import { SecondaryButton } from './Button';

const HomeHeader = () => {
	return (
		<>
			<Navbar>
				<div>
					<LogoIcon />
				</div>

				<NavLinks className="navlinks">
					<P fontSize="18" fontWeight="600">
						Mobile Point of Sale
					</P>
					<P fontSize="18" fontWeight="600">
						Create Store
					</P>
					<P fontSize="18" fontWeight="600">
						Pricing
					</P>
					<P fontSize="18" fontWeight="600">
						Support
					</P>
				</NavLinks>
				<div>
					<SecondaryButton
						fontSize="14"
						fontWeight="600"
						color="#151515"
						to="/login"
						title="Log in"
					/>
				</div>
			</Navbar>
		</>
	);
};

export default HomeHeader;

const Navbar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 120px 32px 120px;
`;
const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
`;
