/* eslint-disable no-mixed-operators */
import { ElementType } from "react";
import styled from "styled-components";
import { InputProps, StyledInputProps } from "../../../interfaces/Interface";
import { InputWrapper, StyledUserOutlined, StyledLockOutlined, StyledEyeTwoTone, StyledEyeInvisibleOutlined } from "../Form/FormStyle";


const InputStyled = styled.input<StyledInputProps>`
outline: none;
`

const defaultElement = 'input';

function Input<E extends ElementType = typeof defaultElement>({
  isForm,
  togglePasswordVisibility,
  type,
  placeholder,
  background,
  as,
  ...otherProps
}: InputProps<E>) {

  return (
    <InputWrapper>
      {isForm
        ? (type === 'email' ? <StyledUserOutlined /> : (<StyledLockOutlined />))
        : (null)
      }
      <InputStyled type={type} placeholder={placeholder} {...otherProps} />
      {isForm && type === 'password' || type === 'text'
        ? (type !== 'password'
          ? <StyledEyeTwoTone onClick={togglePasswordVisibility} />
          : (<StyledEyeInvisibleOutlined onClick={togglePasswordVisibility
          } />))
        : (null)
      }
    </InputWrapper>
  );
}

export default Input;