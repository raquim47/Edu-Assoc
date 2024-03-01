import Button from 'components/common/Button';
import Fieldset from 'components/common/form/Fieldset';
import InputField from 'components/common/form/InputField';
import useLogin from 'hooks/user/useLogin';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormBlock = styled.form`
  width: ${(props) => (props.$miniMode ? '100%' : '478px')};
`;

const LoginForm = ({ miniMode }) => {
  const login = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    login.mutate(data, {
      onSuccess: () => navigate('/'),
    });
  };

  return (
    <FormBlock onSubmit={handleSubmit(handleOnSubmit)} $miniMode={miniMode}>
      <Fieldset>
        <InputField
          id="email"
          label="아이디(이메일)"
          miniMode={miniMode}
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
          miniMode={miniMode}
          autoComplete="new-password"
          error={errors['password']}
          registerOption={register('password', {
            required: '비밀번호를 입력하세요',
          })}
        />
      </Fieldset>
      <Button type="submit" width="100%" disabled={login.isPending}>
        {login.isPending ? '요청중' : '로그인'}
      </Button>
    </FormBlock>
  );
};

export default LoginForm;
