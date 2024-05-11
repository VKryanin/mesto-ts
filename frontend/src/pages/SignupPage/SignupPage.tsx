import { memo, useState } from 'react';
import Form from "../../components/Components/Form/Form"
import Input from '../../components/Components/Input/Input';
import { useAppDispatch } from '../../store/hook';
import { createUser } from '../../store/user/userSlice';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createUser({ email, password }))
      .then((res) => {
        navigate('/sign-in');
      }
      )
  };

  return (
    <>
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
    </>
  )
}

export default memo(SignupPage);