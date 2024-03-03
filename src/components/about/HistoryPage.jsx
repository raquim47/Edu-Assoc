import styled from 'styled-components';

const AnnualList = styled.div`
  margin-bottom: 24px;

  h4 {
    margin-bottom: 6px;
    color: ${(props) => props.theme.color.blue[1]};
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 500;
  }

  ul {
    border-top: 3px solid ${(props) => props.theme.color.blue[2]};
  }

  li {
    display: flex;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    border-top: none;

    strong {
      flex-shrink: 0;
      width: 100px;
      padding: 10px 0;
      border-right: 1px solid ${(props) => props.theme.color.gray[1]};
      background-color: ${(props) => props.theme.color.gray[2]};
      color: ${(props) => props.theme.color.black[2]};
      text-align: center;
    }

    p {
      padding: 10px 20px;
      color: ${(props) => props.theme.color.black[1]};
    }
  }
`;

const HistoryPage = () => {
  return (
    <>
      <AnnualList>
        <h4>2023</h4>
        <ul>
          <li>
            <strong>03</strong>
            <p>서비스경영학회지 제21권 제1호 발간</p>
          </li>
          <li>
            <strong>05</strong>
            <p>서비스경영학회지 제21권 제1호 발간</p>
          </li>
          <li>
            <strong>06</strong>
            <p>서비스경영학회지 제21권 제1호 발간</p>
          </li>
        </ul>
      </AnnualList>
      <AnnualList>
        <h4>2024</h4>
        <ul>
          <li>
            <strong>01</strong>
            <p>
              서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간서비스경영학회지제21권제1호발간
            </p>
          </li>
          <li>
            <strong>02</strong>
            <p>서비스경영학회지 제21권 제1호 발간</p>
          </li>
          <li>
            <strong>03</strong>
            <p>서비스경영학회지 제21권 제1호 발간</p>
          </li>
        </ul>
      </AnnualList>
    </>
  );
};

export default HistoryPage;
