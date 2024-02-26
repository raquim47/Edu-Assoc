import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;

  select {
    width: 130px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  input {
    width: 100%;
    padding: 15px 20px;
    font-size: ${(props) => props.theme.fontSize.m};
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  button {
    width: 150px;
    color: white;
    background-color: ${(props) => props.theme.color.blue[1]};

    &:hover {
      background-color: ${(props) => props.theme.color.blue[2]};
    }
  }
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;

  thead {
    background-color: ${(props) => props.theme.color.gray[2]};
    th {
      padding: 12px;
      border-bottom: 2px solid ${(props) => props.theme.color.gray[1]};
      font-weight: 400;
    }

    th.th-number {
      width: 80px;
    }
    th.th-author {
      width: 100px;
    }
    th.th-date {
      width: 120px;
    }
    th.th-views {
      width: 80px;
    }
  }

  tbody {
    td {
      font-size: ${(props) => props.theme.fontSize.m};
      padding: 14px 12px;
      border-bottom: 1px solid #dee2e6;
      text-align: center;
      color: ${props => props.theme.color.black[1]}
    }

    td.td-title {
      padding: 12px 15px;
      text-align: left;
    }

    td.td-title a:hover {
      text-decoration: underline;
    }
  }

  .ellipsis {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    gap: 8px;
  }

  li {
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    font-size: ${(props) => props.theme.fontSize.s};
    color: ${(props) => props.theme.color.black[2]};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.gray[2]};
    }
  }
`;

const AnnouncementsPage = () => {
  const handleSearch = () => {
    console.log('Search');
  };

  return (
    <Wrapper>
      <section>
        <SearchForm>
          <select>
            <option value="title">제목</option>
            <option value="views">조회수</option>
            <option value="date">등록일</option>
          </select>
          <input placeholder="검색" />
          <button onClick={handleSearch}>검색</button>
        </SearchForm>
      </section>
      <section>
        <Table>
          <thead>
            <tr>
              <th className="th-number">No.</th>
              <th>제목</th>
              <th className="th-author">작성자</th>
              <th className="th-date">등록일</th>
              <th className="th-views">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="td-title ellipsis">
                <Link>
                  게시글 제목게시글 제목게시글 제목게시글 제목게시글
                  제목afwefawf게시글 제목게시글 제목게시글 제목게시글 제목게시글
                  제목afwefawf
                </Link>
              </td>
              <td className="ellipsis">관리자</td>
              <td>2024.02.26</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="td-title ellipsis">
                <Link>
                  게시글 제목게시글 제목게시글 제목게시글 제목게시글
                  제목afwefawf
                </Link>
              </td>
              <td className="ellipsis">관리자</td>
              <td>2024.02.26</td>
              <td>100</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section>
        <Pagination>
          <ul>
            <li>&lt;&lt;</li>
            <li>&lt;</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>&gt;</li>
            <li>&gt;&gt;</li>
          </ul>
        </Pagination>
      </section>
      <Link to='new'>글쓰기</Link>
    </Wrapper>
  );
};

export default AnnouncementsPage;
