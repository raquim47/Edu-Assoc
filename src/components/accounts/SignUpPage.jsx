import AgreeField from './ui/AgreeField';
import { useSignup } from './hooks';
import SignupForm from './ui/SignupForm';
import { useState } from 'react';
import Button from 'components/common/Button';

const SignupPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const signup = useSignup();

  const handleTermsAccepted = (state) => setTermsAccepted(state);

  const handleBeforeSubmit = () => {
    if (!termsAccepted) {
      alert('이용약관에 동의해주세요');
      return false;
    }
    return true;
  };

  const handleAfterSubmit = (data) => {
    signup.mutate(data);
  };

  return (
    <>
      <AgreeField
        agreementText={'이용약관 내용 '.repeat(150)}
        id="termsAgreement"
        label="이용약관"
        onChange={handleTermsAccepted}
      />
      <SignupForm
        beforeOnSubmit={handleBeforeSubmit}
        afterOnSubmit={handleAfterSubmit}
      >
        <Button theme="blue" type="submit" disabled={signup.isPending}>
          {signup.isPending ? '요청중' : '가입하기'}
        </Button>
      </SignupForm>
    </>
  );
};
export default SignupPage;