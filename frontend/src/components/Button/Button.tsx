import { ElementType } from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "../../interfaces/ButtonProps";

const StyledButton = styled.button<StyledButtonProps>`
  text-decoration: transparent;
  font-size: 19px;
  max-width: 100px;
  width: 100%;
  margin: 0 auto;
  padding: 5px;
  font-size: 18px;
  border: ${(p) => (p.border ? '1px solid red' : 'none')};
  color: ${(p) => (p.color ? p.color : '#fff')};
  background: ${(p) => (p.background ? 'rgb(255, 255, 255)' : 'none')};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(p) => (p.background ? 'rgba(255, 255, 255, .6)' : '')};
    color: ${(p) => (p.background ? '' : 'rgba(255, 255, 255, .6)')};
  }
`;

const defaultElement = 'button';

function Button<E extends ElementType = typeof defaultElement>({
  children,
  primary,
  secondary,
  background,
  as,
  ...otherProps
}: ButtonProps<E>) {

  const TagName = as || defaultElement;
  console.log(background, TagName);
  return (
    <StyledButton background={background} {...otherProps}>{children}</StyledButton>
  );
}

export default Button;
