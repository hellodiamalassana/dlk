import styled from "styled-components";

export const StyledPresentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 595px;

  .lottie-player {
    height: max-content;
    margin-top: 15rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const TypedContainer = styled.div`
  margin-left: 2.8rem;
  width: 95%;

  .currently-dev {
    font-size: 1.45rem;
    letter-spacing: 0.2px;
  }

  h1 {
    font-size: 3.1rem;
    letter-spacing: 0.2px;
  }

  .my-buttons {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    a {
      font-family: inherit;
      font-size: 0.95rem;
      padding: 0.525rem 2.15rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 80px;
    margin-bottom: 1.5rem;

    span {
      margin-right: 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.1px;
    }

    .element {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
  }
`;
