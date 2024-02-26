import styled from "styled-components";

const NewForm = styled.div`
  border: 1px solid #d1d5db;
  border-top: 1px solid ${(props) => props.theme.color.gray[0]};

  .row {
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.color.gray[1]};

    label {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 130px;
      padding: 10px 20px 10px 0;
      border-right: 1px solid ${(props) => props.theme.color.gray[1]};
      text-align: right;
      font-size: ${(props) => props.theme.fontSize.s};
      color: ${(props) => props.theme.color.black[2]};
      background-color: ${(props) => props.theme.color.gray[2]};
    }

    .input-field {
      flex: 1;
      display: flex;
      position: relative;
      gap: 10px;
      padding: 10px;
    }

    .input-field.quill {
      padding: 0;
    }
    
    .input-field.quill .error-message {
      top: 90px;
      left: 20px;
    }

    .error-message {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 25px;
      color : ${props => props.theme.color.red};
      font-weight: 300;
      font-size: ${props => props.theme.fontSize.xs};
    }

    .input-field input {
      width: 100%;
      border: 1px solid ${(props) => props.theme.color.gray[1]};
      font-size: ${(props) => props.theme.fontSize.m};
      color: ${(props) => props.theme.color.black[1]};
      padding: 10px;
    }

    .input-field input.author-input {
      width: 300px;
      background-color: ${props => props.theme.color.gray[2]};
    }
    
    .file-label {
      padding: 0;
      justify-content: center;
      background-color: ${(props) => props.theme.color.black[2]};
      color: ${(props) => props.theme.color.white};
      border: none;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.color.blue[0]};
      }
    }
  }

  .quill {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;

    .ql-toolbar.ql-snow {
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.color.gray[1]};
    }

    .ql-container.ql-snow {
      border: none;
    }
    .ql-editor {
      height: 350px;
      color: ${(props) => props.theme.color.black[1]};
      font-size: ${(props) => props.theme.fontSize.m};
      white-space: normal;
      overflow-y: scroll;
    }

    .ql-formats {
      margin: 0;
    }
  }
`;

export default NewForm;