import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterTop = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.gray[1]};
  border-bottom: 1px solid ${(props) => props.theme.color.gray[1]};
  margin-top: 50px;

  ul {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
    gap: 30px;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0;

  h2 {
    color: ${(props) => props.theme.color.blue[1]};
  }

  p {
    margin-top: 6px;
    font-weight: 300;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterTop>
        <ul>
          <li>
            <Link to="history">연혁</Link>
          </li>
          <li>
            <Link to="location">오시는길</Link>
          </li>
          <li>
            <Link>이용약관</Link>
          </li>
          <li>
            <Link>개인정보처리방침</Link>
          </li>
        </ul>
      </FooterTop>
      <FooterBottom>
        <h2>사단법인 글로벌경영컨설팅협회(GMCA)</h2>
        <p>
          02713 서울특별시 성북구 서경로 124, 한림관 1016호/ 전화: 02-940-7211/
        </p>
        <p>COPYRIGHT ⓒ 2024 GMCA. ALL RIGHTS RESERVED.</p>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
