import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../assets';

const Header = () => {
	return (
		<>
			<Navbar>
				<div>
					<LogoIcon />
				</div>
			</Navbar>
		</>
	);
};

export default Header;

const Navbar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		display: flex;
		gap: 10px;
	}
	.logo img {
		display: none;
	}

	.navlinks a {
		color: #454545;
		border: 1px solid #fff;
		padding: 10px;
		transition: 0.3s all linear;

		:hover {
			border-bottom: 1px solid #454545;
			transition: 0.3s all linear;
		}
	}

	@media screen and (max-width: 767px) {
		.logo img {
			display: block;
			cursor: pointer;
		}

		.navlinks {
			display: none;
		}

		.responsive {
			display: block;
			position: fixed;
			background-color: #fff;
			border-bottom: 1px solid;
			transition: 0.3s all linear;
			width: 100%;
			top: 70px;

			a {
				display: block;
				text-align: left;
				color: #454545;
				width: 100%;
				padding: 15px 12px;
			}
		}
	}
`;
