import React from 'react';
import styled from 'styled-components';
import {
	Container,
	ContainerTwo,
	HomeHeader,
	ImageContainer,
	PrimaryButton,
	SecondaryButton,
} from '../../components';
import { H1, P } from '../../utils/Typography';
import { ImageFive, ImageFour, ImageOne } from '../../assets/';
import { imageContainersData } from './data';

const Landing = () => {
	return (
		<>
			<HomeHeader />
			<CenteredHeader>
				<H1 textAlign="center">
					Online & Offline Point of Sale System for all Businesses.
				</H1>
				<P
					fontSize="1.5rem"
					marginTop="2rem"
					color="#151515"
					textAlign="center"
				>
					Manage your online or offline business seamlessly from any device of
					your choice.
				</P>
			</CenteredHeader>
			<Buttons>
				<PrimaryButton
					fontWeight="600"
					fontSize="22px"
					to="/"
					title="Try for free"
				/>
				<SecondaryButton
					color="#151515"
					fontWeight="600"
					fontSize="20px"
					title="Download the App"
					to="/"
				/>
			</Buttons>
			<Image>
				<ImageOne />
			</Image>
			<Container>
				{imageContainersData.map((data, index) => (
					<ImageContainer
						key={index}
						backgroundColor={data.backgroundColor}
						title={data.title}
						subtitle={data.subtitle}
						children={<data.children />}
					/>
				))}
			</Container>
			<SectionTwo>
				<ContainerTwo>
					<Section>
						<div className="texts">
							<H1 marginBottom="24px" textAlign="left" fontSize="57">
								A Complete Multiple Payment Options
							</H1>
							<P marginBottom="91px" textAlign="left" fontSize="22">
								Regardless of how your customer chooses to pay, your business
								can accept it. We offer a wide range of payment options
								including cash, card, mobile money, bank transfer and more. And
								generate a receipt immediately
							</P>
							<div style={{ width: '252px' }}>
								<PrimaryButton
									fontWeight="600"
									fontSize="16"
									to="/"
									title="Try for free"
								/>
							</div>
						</div>

						<div className="image">
							<ImageFour />
							<ImageFive />
						</div>
					</Section>
				</ContainerTwo>
				<H1 textAlign="left" marginTop="119px">
					One Platform for all Your Business Needs.
				</H1>
				<P fontSize="28px">
					Get all the resources you need to grow your business MPOS is
					efficient, effective and the best tool to grow your businesses.
				</P>
			</SectionTwo>
		</>
	);
};

export default Landing;

const CenteredHeader = styled.div`
	display: flex;
	margin-top: 5.6rem;
	flex-direction: column;
	padding: 0 12.8rem;
	justify-content: center;
	align-items: center;
`;

const Buttons = styled.div`
	display: flex;
	margin-top: 6.3rem;
	flex-direction: column;
	padding: 0 35%;
	justify-content: center;
	gap: 1rem; /* Adds space between the buttons */
`;

const Image = styled.div`
	display: flex;
	margin-top: 4.8rem;
	justify-content: center;
	align-items: center;
`;

const Section = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	// padding: 6.8rem 7rem 0rem 6.8rem;
	background-color: red;
	.texts {
		display: flex;
		flex-direction: column;
		margin-right: 65px;
	}
	.image {
		flex-direction: row;
		display: flex;
	}
`;
const SectionTwo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0rem 7.5rem 0rem 7.5rem;
`;

const SectionItem = styled.div``;
