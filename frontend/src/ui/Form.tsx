/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  h1 {
    color: #fff;
    text-align: center;
  }

  button {
    max-width: 100px;
    width: 100%;
    margin: 0 auto;
    padding: 5px;
    font-size: 18px;
    background: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, .6)
    }
  }
`;

export const InputStyle = styled.div`
width: 100%;
background: transparent;
border-bottom: 1px solid #fff;
margin-bottom: 25px;

  input {
  border: transparent;
  background: none;
  
  padding: 5px;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 18px;

  &:focus {
    outline: none; /* Убираем внешний контур при фокусе */
    border: none; 
  }
}
&:focus-within {
  border-bottom: 1px solid rgba(255, 255, 255, .6);
}
`

export const StyledUserOutlined = styled(UserOutlined)`
  color: #fff;
  & svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledLockOutlined = styled(LockOutlined)`
  color: #fff;
  & svg {
    width: 1rem;
    height: 1rem;
  }
`;

// export default { FormContainer, InputStyle, StyledUserOutlined, StyledLockOutlined }