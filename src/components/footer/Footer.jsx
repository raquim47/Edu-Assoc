import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterTop = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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

  strong {
    color: #184368;
  }

  p {
    margin-top: 8px;
    font-weight: 300;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterTop>
        <ul>
          <li>
            <Link>연혁</Link>
          </li>
          <li>
            <Link>오시는길</Link>
          </li>
          <li>
            <Link>사이트맵</Link>
          </li>
          <li>
            <Link>개인정보처리방침</Link>
          </li>
        </ul>
      </FooterTop>
      <FooterBottom>
        <strong>한국법인협회</strong>
        <p>
          04145 서울특별시 마포구 마포대로 115-8 (공덕동, 공덕빌딩 2층 206호) /
          전화 : 02-364-4422 / 팩스 : 02-313-8772 / 이메일 :
          openedu1@hanmail.net
        </p>
        <p>
          회비계좌번호 : 우리은행 1005-702-022701 (예금주 : 한국열린교육학회)
        </p>
        <p>COPYRIGHT ⓒ 2018 OPENEDU. ALL RIGHTS RESERVED.</p>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
