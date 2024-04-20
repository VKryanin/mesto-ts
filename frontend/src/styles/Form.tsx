/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components';

import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 100%;

  h3 {
    color: #fff;
    text-align: center;
    font-size: 22px;
    margin-top: 0;
  }

  p {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

export const InputWrapper = styled.div`
width: 100%;
background: transparent;
border-bottom: 1px solid #fff;
margin-bottom: 25px;
display: flex;
align-items: center;
justify-content: space-around;

  input {
  border: transparent;
  background: none;
  padding: 5px;
  transition: all 0.3s ease;
  color: #fff;
  font-size: 18px;
  flex-grow:1;

  &:focus {
    outline: none; 
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

export const StyledEyeTwoTone = styled(EyeOutlined)`
  color: #fff;
  & svg {
    width: 1rem;
    height: 1rem;
  }
`;
export const StyledEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  color: #fff;
  & svg {
    width: 1rem;
    height: 1rem;
  }
`;