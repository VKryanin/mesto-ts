import { memo, useState } from 'react';
import Form from "../../components/Components/Form/Form"
import Input from '../../components/Components/Input/Input';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getToken } from '../../store/user/userSlice';
import { toggleInfoTooltipPopup } from '../../store/popups/popupsSlice';

const LoginPage = () => {
  const { message, imgPath } = useAppSelector(({ user }) => user)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      getToken({ email, password })
    );
    dispatch(toggleInfoTooltipPopup({ isShow: true, message }))
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        title='Sign in'
        buttonText='Login'
        inputType={['email', 'password']}
        sub='Not registered?'
        help='Registration'
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
          placeholder='Password'
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