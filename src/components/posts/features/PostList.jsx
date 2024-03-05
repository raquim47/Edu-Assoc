import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fileIcon from 'assets/file-icon.png';
import { formatDate } from 'utils/format';

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
        top: 2px;
        left: 8px;
        width: 20px;
      }
    }

    td.td-title a:hover {
      text-decoration: underline;
    }
  }
`;

const PostList = ({ posts, startNumber, currentPage }) => {
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
                <Link to={`${post._id}/?beforePage=${currentPage}`}>{post.title}</Link>
                {post.files.length > 0 && (
                  <span>
                    <img src={fileIcon} alt="file" />
                  </span>
                )}
              </td>
              <td className="ellipsis">{post.authorName}</td>
              <td>{formatDate(post.createdAt)}</td>
              <td>{post.views}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default PostList;
