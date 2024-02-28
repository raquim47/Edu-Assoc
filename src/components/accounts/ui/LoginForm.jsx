import Fieldset from 'components/common/form/Fieldset';
import InputField from 'components/common/form/InputField';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit, basicMode, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <InputField
          id="email"
          label="아이디(이메일)"
          basicMode={basicMode}
          error={errors['email']}
          placeholder="abc@google.com"
          registerOption={register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '이메일이 형식에 맞지 않습니다',
            },
          })}
        />
        <InputField
          id="password"
          label="비밀번호"
          type="password"
          placeholder="●●●●●●●●"
          basicMode={basicMode}
          error={errors['password']}
          registerOption={register('password', {
            required: '비밀번호를 입력하세요',
          })}
        />
      </Fieldset>
      {children}
    </form>
  );
};

export default LoginForm;
