import AgreeField from './ui/AgreeField';
import { useRegisterUser } from './hooks';
import SignUpForm from './ui/SignUpForm';
import { useState } from 'react';
import Button from 'components/common/Button';

const SignUpPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const registerUser = useRegisterUser();

  const handleTermsAccepted = (state) => setTermsAccepted(state);

  const handleBeforeSubmit = () => {
    if (!termsAccepted) {
      alert('이용약관에 동의해주세요');
      return false;
    }
    return true;
  };

  const handleAfterSubmit = (data) => {
    registerUser.mutate(data);
  };

  return (
    <>
      <AgreeField
        agreementText={'이용약관 내용 '.repeat(150)}
        id="termsAgreement"
        label="이용약관"
        onChange={handleTermsAccepted}
      />
      <SignUpForm
        beforeOnSubmit={handleBeforeSubmit}
        afterOnSubmit={handleAfterSubmit}
      >
        <Button theme="blue" type="submit" disabled={registerUser.isPending}>
          {registerUser.isPending ? '요청중' : '가입하기'}
        </Button>
      </SignUpForm>
    </>
  );
};

export default SignUpPage;
