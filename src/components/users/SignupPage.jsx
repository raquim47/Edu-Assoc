import { useState } from 'react';
import SignupForm from './features/SignupForm';
import AgreeField from 'components/common/form/AgreeField';
import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import useApiRequest from 'hooks/common/useApiRequest';

const SignupPage = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const signup = useApiRequest({ url: `/users/signup`, method: 'POST' });

  const handleTermsAccepted = (state) => setTermsAccepted(state);

  const handleBeforeSubmit = () => {
    if (!termsAccepted) {
      alert('이용약관에 동의해주세요');
      return false;
    }
    return true;
  };

  const handleAfterSubmit = (data) => {
    signup.mutate(data, {
      onSuccess: () => {
        alert('가입이 완료되었습니다');
        navigate('/login');
      },
    });
  };

  return (
    <>
      <AgreeField
        content={'이용약관 내용 '.repeat(150)}
        id="termsAgreement"
        label="이용약관"
        onChange={handleTermsAccepted}
      />
      <SignupForm
        beforeOnSubmit={handleBeforeSubmit}
        afterOnSubmit={handleAfterSubmit}
      >
        <Button type="submit" width="100%" disabled={signup.isPending}>
          {signup.isPending ? '요청중' : '가입하기'}
        </Button>
      </SignupForm>
    </>
  );
};
export default SignupPage;
