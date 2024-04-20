import { memo, useState } from 'react';

import Section from "../ui/Section"
import Form from "../components/Form/Form"

const LoginPage = () => {
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
    <Section width='100%' height='100vh' minHeight='100vh' minWidth='100vw' justifyContent='center' alignItems='center'>
      <Form
        onSubmit={handleSubmit}
        title='Вход'
        buttonText='Войти'
        inputType={['email', 'password']}
        togglePasswordVisibility={togglePasswordVisibility}
      >
        <input type='email' value={email || ''} onChange={(e) => setEmail(e.target.value)} placeholder='Почта' />
        <input type={showPassword ? 'text' : 'password'} value={password || ''} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' />
      </Form>
    </Section>
  )
}

export default memo(LoginPage);