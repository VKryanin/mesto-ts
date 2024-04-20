import React, { ReactNode, useState } from 'react';
import {
  FormContainer,
  InputStyle,
  StyledUserOutlined,
  StyledLockOutlined,
  StyledEyeTwoTone,
  StyledEyeInvisibleOutlined
} from '../../ui/Form';

import FormProps from '../../interfaces/FormProps';

interface ExtendedFormProps extends FormProps {
  togglePasswordVisibility: () => void;
}

// Компонент формы
const Form = ({ children, onSubmit, title, buttonText, inputType, togglePasswordVisibility }: ExtendedFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibilityLocal = () => {
    setShowPassword(!showPassword);
    togglePasswordVisibility();
  };

  const getIcon = (type: string, child: ReactNode) => {
    switch (type) {
      case 'email':
        return (
          <InputStyle>
            <StyledUserOutlined className="icon" />
            {child}
          </InputStyle>
        );

      case 'password':
        return (
          <InputStyle>
            <StyledLockOutlined className="icon" />
            {child}
            {showPassword ? (
              <StyledEyeTwoTone onClick={togglePasswordVisibilityLocal} />
            ) : (
              <StyledEyeInvisibleOutlined onClick={togglePasswordVisibilityLocal} />
            )}
          </InputStyle>
        );
      case 'text':
        return (
          <InputStyle>
            <StyledLockOutlined className="icon" />
            {child}
            {!showPassword ? (
              <StyledEyeTwoTone onClick={togglePasswordVisibilityLocal} />
            ) : (
              <StyledEyeInvisibleOutlined onClick={togglePasswordVisibilityLocal} />
            )}
          </InputStyle>
        );
      default:
        return null;
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <h1>{title}</h1>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {getIcon(inputType[index], child)}
        </React.Fragment>
      ))}
      <button type="submit">{buttonText}</button>
    </FormContainer>
  );
};

export default Form;