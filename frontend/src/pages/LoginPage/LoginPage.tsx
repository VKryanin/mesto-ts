import { memo, useState } from 'react';
import Form from "../../components/Components/Form/Form"
import Input from '../../components/Components/Input/Input';
import { useAppDispatch } from '../../store/hook';
import { getToken } from '../../store/user/userSlice';

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
    <>
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
    </>
  )
}

export default memo(LoginPage);