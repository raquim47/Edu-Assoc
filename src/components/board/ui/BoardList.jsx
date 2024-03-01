import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      color: ${(props) => props.theme.color.black[1]};
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

const formatCreatedAtToDate = (createdAt) => {
  const date = new Date(createdAt.seconds * 1000);
  const isoString = date.toISOString();
  const formattedDate = isoString.split('T')[0];

  return formattedDate;
};

const BoardList = ({ posts, startNumber }) => {
  return (
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
        {posts.length > 0 &&
          posts.map((post, i) => (
            <tr key={post.id}>
              <td>{startNumber - i}</td>
              <td className="td-title ellipsis">
                <Link>{post.title}</Link>
              </td>
              <td className="ellipsis">{post.author}</td>
              <td>{formatCreatedAtToDate(post.createdAt)}</td>
              <td>0</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default BoardList;
