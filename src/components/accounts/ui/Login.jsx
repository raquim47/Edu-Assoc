import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks';
import FormTemplate from './FormTemplate';
import InputFIeld from './InputFIeld';

const Login = ({ basicMode }) => {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          alert('이메일 또는 비밀번호가 유효하지 않습니다');
          break;
        default:
          alert('로그인하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };
  return (
    <FormTemplate
      onSubmit={handleSubmit(handleOnSubmit, () =>
        alert('입력사항을 확인해주세요')
      )}
    >
      <fieldset>
        <InputFIeld
          id="email"
          label="아이디(이메일)"
          basicMode={basicMode}
          error={errors['email']}
          placeholder="abc@google.com"
          {...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '이메일이 형식에 맞지 않습니다',
            },
          })}
        ></InputFIeld>
        <InputFIeld
          id="password"
          label="비밀번호"
          type="password"
          placeholder="●●●●●●●●"
          basicMode={basicMode}
          error={errors['password']}
          {...register('password', {
            required: '비밀번호를 입력하세요',
          })}
        />
      </fieldset>
      <button className="submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? '요청중' : '로그인'}
      </button>
    </FormTemplate>
  );
};

export default Login;
