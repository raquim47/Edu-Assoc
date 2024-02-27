import { useForm } from 'react-hook-form';
import FormTemplate from './FormTemplate';
import InputFIeld from './InputFIeld';

const LoginForm = ({ onSubmit, basicMode, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormTemplate onSubmit={handleSubmit(onSubmit)}>
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
      {children}
    </FormTemplate>
  );
};

export default LoginForm;
