// ContainerComponent.tsx
import React from 'react';
import styled from 'styled-components';
import { H1, P } from '../utils/Typography';

interface ContainerProps {
	title?: string;
	subtitle?: string;
	backgroundColor: string;
	children?: JSX.Element;
}

const Container = styled.div<{ backgroundColor: string }>`
	background-color: ${(props) => props.backgroundColor};
	padding: 2rem 4.1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 8px;
	text-align: center;
`;

const ImageContainer: React.FC<ContainerProps> = ({
	title,
	subtitle,
	backgroundColor,
	children,
}) => {
	return (
		<Container backgroundColor={backgroundColor}>
			{children}
			<H1 marginTop="1.6rem" textAlign="center" fontSize="20px">
				{title}
			</H1>
			<P marginTop="1rem" fontSize="12" textAlign="center">
				{subtitle}
			</P>
		</Container>
	);
};

export default ImageContainer;
