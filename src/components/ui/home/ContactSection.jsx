import styled from 'styled-components';
import contactBg from '../../../assets/contact-bg.png';

const Wrapper = styled.section`
  background-color: #f3f3f3;
  margin-bottom: 300px;

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 1200px;
    height: 350px;
    margin: 0 auto;
  }

  .inner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${contactBg});
    background-repeat: no-repeat;
    background-size: 180px;
    background-position: left 200px center;
    opacity: 0.3;
    pointer-events: none;
  }

  h2 {
    font-size: 30px;
    color: #184368;
    margin-bottom: 25px;
  }

  p {
    font-size: 20px;
    margin-bottom: 14px;
  }
`;

const ContactSection = () => {
  return (
    <Wrapper>
      <div className="inner">
        <h2>Contact</h2>
        <p>사무국 : 010-8957-4020 / ksms-office@daum.net</p>
        <p>평일 : 10:00 ~ 17:00 / 평일 점심시간 : 12:00 ~ 1:00</p>
        <p>토,일 / 공휴일은 휴무입니다.</p>
      </div>
    </Wrapper>
  );
};

export default ContactSection;
