import AgreementCheckBox from 'components/accounts/AgreementCheckBox';
import RegisterInput from 'components/accounts/RegisterInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .submit-btn {
    padding: 15px 0;
    background-color: ${props => props.theme.color.blue[1]};
    color: ${props => props.theme.color.white};

    &:disabled {
      background-color: ${props => props.theme.color.gray[2]};
      cursor: default;
    }
    &:hover {
      background-color: ${props => props.theme.color.blue[2]};
    }
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 18px;

  legend {
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: 15px;
  }
`;

const CheckBtn = styled.button`
  background-color: ${props => props.theme.color.black[2]};
  color: ${props => props.theme.color.white};
  border: none;
  padding: 10px 15px;
`;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const termsAgreed = watch('termsAgreed');

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <legend>이용약관</legend>
          <AgreementCheckBox agreementText={'이용약관 내용 '.repeat(150)} id="termsAgreement" label="이용약관에 동의합니다." {...register('termsAgreed', { required: true })}/>
        </Fieldset>
        <Fieldset>
          <legend>기본정보</legend>
          <RegisterInput
            id="email"
            label="아이디(이메일)"
            isRequired
            placeholder="ex) abc@google.com"
            {...register('email', { required: '이름은 필수 항목입니다.' })}
          >
            <CheckBtn type="button">중복 확인</CheckBtn>
          </RegisterInput>
          <RegisterInput
            id="username"
            label="이름"
            isRequired
            // placeholder="ex) abc@google.com"
            {...register('username', { required: '이름은 필수 항목입니다.' })}
          />
          <RegisterInput
            id="password"
            label="비밀번호"
            isRequired
            type="password"
            {...register('password', { required: '비밀번호를 입력하세요' })}
          />
          <RegisterInput
            id="password-confirm"
            label="비밀번호 확인"
            isRequired
            type="password"
            {...register('password-confirm', {
              required: '비밀번호를 입력하세요',
            })}
          />
          <RegisterInput
            id="phone"
            label="전화번호"
            // isRequired
            placeholder="000-0000-0000"
            {...register('phone', { required: '비밀번호를 입력하세요' })}
          />
        </Fieldset>

        <button className="submit-btn" type="submit">
          회원가입
        </button>
      </Form>
    </div>
  );
};

export default RegisterPage;
