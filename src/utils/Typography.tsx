import styled from 'styled-components';
import { theme } from './Themes';

interface TextProps {
	fontSize?: string;
	fontWeight?: string;
	color?: string;
	margin?: string;
	padding?: string;
	lineHeight?: string;
	textAlign?: string;
	marginTop?: string;
	marginBottom?: string;
	paddingTop?: string;
	paddingBottom?: string;
}

export const H1 = styled.h1<TextProps>`
	font-size: ${(props) => props.fontSize || theme.headFontSize.xlg};
	font-family: 'Manrope', sans-serif;
	font-weight: ${(props) => props.fontWeight || theme.fontWeight.bold};
	color: ${(props) => props.color || theme.color.dark};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || '0'};
	line-height: ${(props) => props.lineHeight || '1.2'};
	text-align: ${(props) => props.textAlign || 'left'};
	margin-top: ${(props) => props.marginTop || '0'};
	margin-bottom: ${(props) => props.marginBottom || '0'};
	padding-top: ${(props) => props.paddingTop || '0'};
	padding-bottom: ${(props) => props.paddingBottom || '0'};
`;

export const H2 = styled.h2<TextProps>`
	font-size: ${(props) => props.fontSize || theme.headFontSize.lg};
	font-family: 'Manrope', sans-serif;
	font-weight: ${(props) => props.fontWeight || theme.fontWeight.bold};
	color: ${(props) => props.color || theme.color.dark};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || '0'};
	line-height: ${(props) => props.lineHeight || '1.2'};
	text-align: ${(props) => props.textAlign || 'left'};
	margin-top: ${(props) => props.marginTop || '0'};
	margin-bottom: ${(props) => props.marginBottom || '0'};
	padding-top: ${(props) => props.paddingTop || '0'};
	padding-bottom: ${(props) => props.paddingBottom || '0'};
`;

export const H3 = styled.h3<TextProps>`
	font-size: ${(props) => props.fontSize || theme.headFontSize.md};
	font-family: 'Manrope', sans-serif;
	font-weight: ${(props) => props.fontWeight || theme.fontWeight.bold};
	color: ${(props) => props.color || theme.color.dark};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || '0'};
	line-height: ${(props) => props.lineHeight || '1.2'};
	text-align: ${(props) => props.textAlign || 'left'};
	margin-top: ${(props) => props.marginTop || '0'};
	margin-bottom: ${(props) => props.marginBottom || '0'};
	padding-top: ${(props) => props.paddingTop || '0'};
	padding-bottom: ${(props) => props.paddingBottom || '0'};
`;

export const H4 = styled.h4<TextProps>`
	font-size: ${(props) => props.fontSize || theme.headFontSize.sm};
	font-family: 'Manrope', sans-serif;
	font-weight: ${(props) => props.fontWeight || theme.fontWeight.bold};
	color: ${(props) => props.color || theme.color.dark};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || '0'};
	line-height: ${(props) => props.lineHeight || '1.2'};
	text-align: ${(props) => props.textAlign || 'left'};
	padding-top: ${(props) => props.paddingTop || '0'};
	padding-bottom: ${(props) => props.paddingBottom || '0'};
	margin-top: ${(props) => props.marginTop || '0'};
	margin-bottom: ${(props) => props.marginBottom || '0'};
`;

export const P = styled.p<TextProps>`
	font-size: ${(props) => props.fontSize || theme.bodyFontSize.lg};
	font-family: 'Manrope', sans-serif;
	font-weight: ${(props) => props.fontWeight || theme.fontWeight.normal};
	color: ${(props) => props.color || theme.color.dark};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || '0'};
	line-height: ${(props) => props.lineHeight || '1.4'};
	text-align: ${(props) => props.textAlign || 'left'};
	padding-top: ${(props) => props.paddingTop || '0'};
	margin-top: ${(props) => props.marginTop || '0'};
	padding-bottom: ${(props) => props.paddingBottom || '0'};
	margin-bottom: ${(props) => props.marginBottom || '0'};
`;
