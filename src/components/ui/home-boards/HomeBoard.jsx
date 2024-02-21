import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 25px;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  .more-btn {
    width: 60px;
    padding: 4px 0 1px;
  }

  .more-btn:hover {
    color: white;
    background-color: #194368;
    transition: background-color 0.2s ease;
  }

  ul {
    padding-right: 15px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }

  time {
    color: #a0a0a0;
    font-size: 13px;
    font-weight: 300;
  }
`;

const HomeBoard = ({ title, content, path }) => {
  return (
    <Wrapper>
      <header>
        <h3>{title}</h3>
        <button className="more-btn">더보기</button>
      </header>
      <ul>
        <ListItem>
          <p>
            열린교육연구 32권1호 투고마감연장 (~11/23,목)열린교육연구 32권1호
            투고마감연장 (~11/23,목)
          </p>
          <time dateTime="2023-11-20">2023-11-20</time>
        </ListItem>
        <ListItem>
          <p>열린교육연구 32권1호 투고마감 (~11/20)</p>
          <time dateTime="2023-11-08">2023-11-08</time>
        </ListItem>
        <ListItem>
          <p>열린교육연구 31권6호 투고마감 연장 (~9/24)</p>
          <time dateTime="2023-09-20">2023-09-20</time>
        </ListItem>
        <ListItem>
          <p>2023 국제공동학술대회 (9/23, 태국)</p>
          <time dateTime="2023-09-15">2023-09-15</time>
        </ListItem>
        <ListItem>
          <p>열린교육연구 31권6호 투고마감 (~9/20)</p>
          <time dateTime="2023-09-15">2023-09-15</time>
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default HomeBoard;
