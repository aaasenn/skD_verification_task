import styled from "styled-components";

export const FormProvider = styled.form`
  padding: 40px 30px;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  width: 440px;

  & .essentials-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    grid-column-gap: 20px;
    grid-row-gap: 25px;
    margin-bottom: 20px;

    @media screen and (max-width: 760px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  & .mid-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .additional-handler {
    margin-top: 20px;
    cursor: pointer;

    svg {
      vertical-align: middle;
      margin-left: 8px;
    }
  }

  & .additional-fields {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    margin-top: 20px;
  }
`;
