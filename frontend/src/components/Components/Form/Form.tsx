import { Link, useLocation } from 'react-router-dom'
import {
  FormContainer,
} from './FormStyle';
import Button from '../Button/Button';

import { FormProps } from '../../utils/Interface';


const Form = ({ children, onSubmit, title, buttonText, sub, help }: FormProps) => {
  const location = useLocation();
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
          to={location.pathname === '/sign-in' ? '/sign-up' : '/sign-in'}
          as={Link}
        >{help}
        </Button>
      </p>
    </FormContainer>
  );
};

export default Form;