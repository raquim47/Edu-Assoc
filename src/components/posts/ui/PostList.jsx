import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fileIcon from 'assets/file-icon.png';

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

      span {
        position: relative;
        pointer-events: none;
      }

      img {
        position: absolute;
        top: 4px;
        left: 8px;
        width: 14px;
        height: 18px;
        object-fit: cover;
      }
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

function formatDate(dateString) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\. /g, '-')
    .replace('.', '');
}

const PostList = ({ posts, startNumber }) => {
  return (
    <Table>
      <thead>
        <tr key="head">
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
            <tr key={post._id}>
              <td>{startNumber - i}</td>
              <td className="td-title ellipsis">
                <Link>{post.title}</Link>
                { post.file && <span><img src={fileIcon} /></span>}
              </td>
              <td className="ellipsis">{post.author}</td>
              <td>{formatDate(post.createdAt)}</td>
              <td>0</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PostList;
