import styled from "styled-components";

export const StyledPresentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto -1rem auto;
  height: 595px;
`;

export const TypedContainer = styled.div`
  margin-left: 2.8rem;

  .currently-dev {
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 0.2px;
  }

  h1 {
    font-size: 3.1rem;
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  a {
    font-family: inherit;
    line-height: 1.65;
  }

  div {
    display: flex;
    align-items: center;
    min-height: 80px;
    margin-bottom: 1.5rem;

    span {
      margin-right: 0.8rem;
      font-size: 1.06rem;
      font-weight: 500;
      letter-spacing: 0.4px;
    }

    .element {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
  }
`;
