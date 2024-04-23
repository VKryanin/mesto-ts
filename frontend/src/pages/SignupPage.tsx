import { memo, useState } from 'react';

import Section from "../styles/Section"
import Form from "../components/Components/Form"
import Input from '../components/Components/Input';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
  };

  return (
    <Section width='100%' height='100vh' minheight='100vh' minwidth='100vw' justifycontent='center' margin='85px 0'>
      <Form
        onSubmit={handleSubmit}
        title='Регистрация'
        buttonText='Зарегистрироваться'
        inputType={['email', 'password']}
        sub='Уже есть аккаунт?'
        help='Вход'
      >
        <Input
          isForm={true}
          type='email'
          placeholder='Email'
          as='input'
          value={email || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          isForm={true}
          type={showPassword ? 'password' : 'text'}
          placeholder='Пароль'
          as='input'
          value={password || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </Form>
    </Section>
  )
}

export default memo(SignupPage);