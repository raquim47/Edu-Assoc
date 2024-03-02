import Button from 'components/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  gap: 10px;

  select {
    width: 100px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    color: ${(props) => props.theme.color.black[2]};
  }

  input {
    flex: 1;
    padding: 15px 20px;
    font-size: ${(props) => props.theme.fontSize.m};
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }
`;

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchType = formData.get('searchType');
    const keyword = formData.get('keyword');
    navigate(`${location.pathname}?page=1&searchType=${searchType}&keyword=${keyword}`);
  };

  return (
    <Wrapper onSubmit={handleSearch}>
      <select name="searchType">
        <option value="title">제목</option>
        <option value="author">작성자</option>
      </select>
      <input
        placeholder="검색"
        required
        name="keyword"
      />
      <Button width="100px">검색</Button>
    </Wrapper>
  );
};

export default SearchForm;
