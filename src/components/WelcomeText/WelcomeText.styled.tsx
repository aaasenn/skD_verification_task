import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 30px;
  max-width: 940px;

  & .logo {
    margin-bottom: 40px;
  }

  h2 {
    margin-bottom: 40px;
  }

  & .link {
    color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
  }
`;
