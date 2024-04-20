import React from 'react';
import { FormContainer, InputStyle, StyledUserOutlined, StyledLockOutlined } from '../../ui/Form';

import FormProps from '../../interfaces/FormProps';

// Компонент формы
const Form = ({ children, onSubmit, title, buttonText, inputType }: FormProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <StyledUserOutlined className="icon" />;
      case 'password':
        return <StyledLockOutlined className="icon" />;
      default:
        return null;
    }
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <h1>{title}</h1>
      {React.Children.map(children, (child, index) => (
        <InputStyle>
          {getIcon(inputType[index])}
          {child}
        </InputStyle>
      ))}
      <button type="submit">{buttonText}</button>
    </FormContainer>
  );
};

export default Form;
