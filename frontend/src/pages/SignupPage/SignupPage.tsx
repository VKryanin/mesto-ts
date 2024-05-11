import { memo, useState } from 'react';
import Form from "../../components/Components/Form/Form"
import Input from '../../components/Components/Input/Input';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { createUser } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toggleInfoTooltipPopup } from '../../store/popups/popupsSlice';

const SignupPage = () => {
  const { message, imgPath } = useAppSelector(({ user }) => user)
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
    dispatch(toggleInfoTooltipPopup({ isShow: true, message }))
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        title='Sign up'
        buttonText='Sign up'
        inputType={['email', 'password']}
        sub='Already have an account?'
        help='Sign in'
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
          placeholder='Password'
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