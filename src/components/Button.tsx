import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../utils";

interface ButtonProps {
  to: string;
  title: string;
  color?: string;
  bgColor?: string;
  fontWeight?: string;
  fontSize?: string;
  className?: string;
}

interface StyledButtonProps {
  color?: string;
  bgColor?: string;
  fontWeight?: string;
  className?: string;
  fontSize?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  to,
  title,
  color,
  bgColor,
  fontWeight,
  className,
  fontSize,
}) => {
  return (
    <ButtonContainer
      color={color}
      bgColor={bgColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={`${className}`}
    >
      <Link to={to}>{title}</Link>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<StyledButtonProps>`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 6.25rem;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => props.bgColor || Theme.color.primary};
  color: ${(props) => props.color || Theme.color.light};
  font-weight: ${(props) => props.fontWeight || Theme.fontWeight.normal};
  text-decoration: none;
  border: 1px solid ${Theme.color.primary};
  transition: 0.3s all linear;

  a {
    transition: 0.3s all linear;
    padding: 0.5rem 1rem;
    color: ${(props) => props.color || Theme.color.light};
    text-decoration: none;
    font-size: ${(props) => props.fontSize || Theme.bodyFontSize.sm};
    transition: 0.3s all linear;

    :hover {
      transition: 0.3s all linear;
    }
  }
`;

export const SecondaryButton: React.FC<ButtonProps> = ({
  to,
  title,
  color,
  bgColor,
  fontWeight,
  fontSize,
}) => {
  return (
    <SecondaryButtonContainer
      color={color}
      bgColor={bgColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      <Link to={to}>{title}</Link>
    </SecondaryButtonContainer>
  );
};

const SecondaryButtonContainer = styled.div<StyledButtonProps>`
  display: inline-block;
  border-radius: 6.2rem;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.color || Theme.color.light};
  font-weight: ${(props) => props.fontWeight || Theme.fontWeight.normal};
  background-color: ${Theme.color.light};
  border: 1px solid ${Theme.color.primaryDark};
  padding: 0.8rem 1.5rem;
  transition: 0.3s all linear;

  a {
    transition: 0.3s all linear;
    padding: 0.5rem 1.5rem;
    color: ${Theme.color.primary};
    font-size: ${(props) => props.fontSize || Theme.bodyFontSize.sm};
    text-decoration: none;

    :hover {
      color: #fff;
      transition: 0.3s all linear;
    }
  }
`;
