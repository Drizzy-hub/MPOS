import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../assets';

const Header = () => {
	return (
		<>
			<Navbar>
				<LogoIcon />
			</Navbar>
		</>
	);
};

export default Header;

const Navbar = styled.header`
	display: flex;
	align-items: center;
	padding: 32px 120px 32px 120px;
`;
