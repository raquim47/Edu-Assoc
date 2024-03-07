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
        <h4>2022</h4>
        <ul>
          <li>
            <strong>03</strong>
            <p>제 1차 창립 총회</p>
          </li>
        </ul>
      </AnnualList>
      <AnnualList>
        <h4>2023</h4>
        <ul>
          <li>
            <strong>07</strong>
            <p>글로벌경영컨설팅협회 설립</p>
          </li>
        </ul>
      </AnnualList>
      <AnnualList>
        <h4>2024</h4>
        <ul>
          <li>
            <strong>01</strong>
            <p>제 1차 임시 총회</p>
          </li>
        </ul>
      </AnnualList>
    </>
  );
};

export default HistoryPage;
