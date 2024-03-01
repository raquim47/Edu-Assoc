import styled from 'styled-components';

const NavBlock = styled.nav`
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

    &:hover,
    &.active {
      background-color: ${(props) => props.theme.color.gray[2]};
    }
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 현재 페이지 주변에 표시할 페이지 수를 계산합니다.
  const pageNumbers = [];
  const maxPageNumber = Math.min(totalPages, 5); // 최대 5개의 페이지 번호를 표시합니다.
  const halfMaxPageNumber = Math.floor(maxPageNumber / 2);

  // 시작 페이지 번호를 계산합니다.
  let startPage = Math.max(currentPage - halfMaxPageNumber, 1);
  let endPage = Math.min(startPage + maxPageNumber - 1, totalPages);

  // 현재 페이지가 총 페이지 수에 가까워지면 시작 페이지를 조정합니다.
  if (currentPage + halfMaxPageNumber > totalPages) {
    startPage = Math.max(totalPages - maxPageNumber + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <NavBlock>
      <ul>
        {currentPage > 1 && (
          <>
            <li onClick={() => onPageChange(1)}>&lt;&lt;</li>
            <li onClick={() => onPageChange(currentPage - 1)}>&lt;</li>
          </>
        )}
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        {currentPage < totalPages && (
          <>
            <li onClick={() => onPageChange(currentPage + 1)}>&gt;</li>
            <li onClick={() => onPageChange(totalPages)}>&gt;&gt;</li>
          </>
        )}
      </ul>
    </NavBlock>
  );
};

export default Pagination;
