import { Link } from 'react-router-dom'
import {
  FormContainer,
} from '../../styles/Form';
import Button from './Button';

import FormProps from '../../interfaces/FormProps';


const Form = ({ children, onSubmit, title, buttonText, sub, help }: FormProps) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <>
        <h3>{title}</h3>
        {children}
      </>

      <Button primary type="submit" as='button' >{buttonText}</Button>
      <p>{sub}
        <Button
          secondary
          to='/sign-up'
          as={Link}
        >{help}
        </Button>
      </p>
    </FormContainer>
  );
};

export default Form;