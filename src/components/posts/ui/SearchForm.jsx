import Button from "components/common/Button";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  gap: 10px;

  select {
    width: 100px;
    text-align: center;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    color: ${props => props.theme.color.black[2]};
  }

  input {
    flex: 1;
    padding: 15px 20px;
    font-size: ${(props) => props.theme.fontSize.m};
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }
`;

const SearchForm = () => {
  const handleSearch = () => {
    console.log('Search');
  };

  return (
    <Wrapper>
      <select>
        <option value="content">제목 + 내용</option>
        <option value="author">작성자</option>
      </select>
      <input placeholder="검색" />
      <Button onClick={handleSearch} width="100px">
        검색
      </Button>
    </Wrapper>
  );
};

export default SearchForm;
