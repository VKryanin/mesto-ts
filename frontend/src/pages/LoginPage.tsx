import { memo, useState } from 'react';
import { AuthData, handleSubmitType } from '../interfaces/Interface';
import Section from "../styles/Section"
import Form from "../components/Components/Form"
import Input from '../components/Components/Input';
import { useAppDispatch } from '../store/hook';
import { getToken } from '../store/tokenSlice';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getToken({ email, password }))
  };

  return (
    <Section width='100%' height='100vh' minheight='100vh' minwidth='100vw' justifycontent='center' margin='85px 0'>
      <Form
        onSubmit={onSubmit}
        title='Вход'
        buttonText='Войти'
        inputType={['email', 'password']}
        sub='Не зарегистрированы?'
        help='Регистрация'
      >
        <Input
          isForm={true}
          type='email'
          placeholder='Email'
          as='input'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          isForm={true}
          type={showPassword ? 'password' : 'text'}
          placeholder='Пароль'
          as='input'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </Form>
    </Section>
  )
}

export default memo(LoginPage);