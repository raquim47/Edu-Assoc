import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkEmailDuplicate } from 'components/accounts/utils';
import Button from 'components/common/Button';
import InputField from 'components/common/form/InputField';
import Fieldset from 'components/common/form/Fieldset';

const SignupForm = ({
  beforeOnSubmit = () => true,
  afterOnSubmit = () => {},
  children,
}) => {
  const [emailDupChecked, setEmailDupChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!beforeOnSubmit()) {
      return;
    }

    if (!emailDupChecked) {
      alert('이메일 중복체크가 완료되지 않았습니다.');
      setError('email', { message: '이메일 중복체크가 완료되지 않았습니다.' });
      return;
    }
    handleSubmit(afterOnSubmit)(e);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Fieldset legend="기본정보">
        <InputField
          id="email"
          label="아이디(이메일)"
          isRequired
          placeholder="ex) abc@google.com"
          width="300px"
          error={errors['email']}
          {...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              message: '이메일이 형식에 맞지 않습니다',
            },
          })}
        >
          <Button
            theme="gray"
            size="s"
            type="button"
            onClick={() =>
              checkEmailDuplicate(
                watch('email'),
                setError,
                setEmailDupChecked,
                clearErrors
              )
            }
          >
            중복 확인
          </Button>
        </InputField>
        <InputField
          id="username"
          label="이름"
          isRequired
          width="300px"
          error={errors['username']}
          {...register('username', {
            required: '이름을 입력하세요.',
            pattern: {
              value: /^[가-힣a-zA-Z]{2,8}$/,
              message: '공백을 제외한 영어, 한글 2자 ~ 8자',
            },
          })}
        />
        <InputField
          id="password"
          label="비밀번호"
          isRequired
          type="password"
          width="300px"
          placeholder="8자리 이상 입력해주세요"
          error={errors['password']}
          {...register('password', {
            required: '비밀번호를 입력하세요',
            pattern: {
              value: /^.{8,}$/,
              message: '8자리 이상 입력해주세요',
            },
          })}
        />
        <InputField
          id="passwordConfirm"
          label="비밀번호 확인"
          isRequired
          type="password"
          width="300px"
          error={errors['passwordConfirm']}
          {...register('passwordConfirm', {
            required: '비밀번호 확인을 입력해주세요',
            validate: (value) =>
              watch('password') !== value
                ? '비밀번호 확인란이 일치하지 않습니다'
                : true,
          })}
        />
        <InputField
          id="phone"
          label="전화번호"
          placeholder="000-0000-0000"
          width="300px"
          error={errors['phone']}
          {...register('phone', {
            pattern: {
              value: /^(\d{3}-\d{4}-\d{4})$/,
              message: '형식이 올바르지 않습니다(010-0000-0000)',
            },
          })}
        />
      </Fieldset>
      {children}
    </form>
  );
};

export default SignupForm;
