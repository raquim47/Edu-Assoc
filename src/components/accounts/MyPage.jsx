import { useForm } from 'react-hook-form';
import { useFetchUser, useUpdateUser } from './hooks';
import FormTemplate from './ui/FormTemplate';
import InputFIeld from './ui/InputFIeld';

const MyPage = () => {
  const { user } = useFetchUser();
  const { updateUser, isLoading } = useUpdateUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      await updateUser(data);
      alert('변경이 완료되었습니다');
      setValue('password', '', { shouldValidate: false });
    } catch (error) {
      switch (error.code) {
        case 'auth/missing-password':
          alert('비밀번호가 유효하지 않습니다');
          break;
        default:
          alert(`정보 변경 중 오류가 발생했습니다: ${error.message}`);
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
        <legend>회원정보 수정</legend>
        <InputFIeld
          label="아이디(이메일)"
          id="email"
          defaultValue={user.email}
          disabled
        />
        <InputFIeld
          id="username"
          label="이름"
          defaultValue={user.username}
          error={errors['username']}
          {...register('username', {
            required: '이름을 입력하세요.',
            pattern: {
              value: /^[가-힣a-zA-Z]{2,8}$/,
              message: '공백을 제외한 영어, 한글 2자 ~ 8자',
            },
          })}
        />
        <InputFIeld
          id="password"
          label="비밀번호"
          isRequired
          type="password"
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
        <InputFIeld
          id="phone"
          label="전화번호"
          placeholder="000-0000-0000"
          error={errors['phone']}
          {...register('phone', {
            pattern: {
              value: /^(\d{3}-\d{4}-\d{4})$/,
              message: '형식이 올바르지 않습니다(010-0000-0000)',
            },
          })}
        />
      </fieldset>
      <button className="submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? '요청중' : '회원정보 수정'}
      </button>
    </FormTemplate>
  );
};

export default MyPage;
