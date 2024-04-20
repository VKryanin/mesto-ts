import {
  FormContainer,
} from '../../styles/Form';
import Button from './Button';

import FormProps from '../../interfaces/FormProps';


const Form = ({ children, onSubmit, title, buttonText }: FormProps) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <h1>{title}</h1>
      {children}
      <Button type="submit" as='button' color='#000' background={true}>{buttonText}</Button>
    </FormContainer>
  );
};

export default Form;