import styled from "styled-components";

const FormBtns = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  background-color: ${(props) => props.theme.color.gray[2]};

  button {
    padding: 10px 0;
    border: none;
    background-color: ${(props) => props.theme.color.gray[1]};
    width: 120px;
  }

  button:hover {
    background-color: ${(props) => props.theme.color.gray[0]};
    color: white;
  }

  button.save {
    background-color: ${(props) => props.theme.color.blue[2]};
    color: ${(props) => props.theme.color.white};
  }
  button.save:hover {
    background-color: ${(props) => props.theme.color.blue[1]};
  }
`;

export default FormBtns;