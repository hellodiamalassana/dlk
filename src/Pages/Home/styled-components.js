import styled from "styled-components";

export const TypedContainer = styled.div`
  margin-left: 2.8rem;

  .currently-dev {
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 1.7px;
  }

  h1 {
    font-size: 3.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  div {
    display: flex;
    align-items: center;
    min-height: 80px;
    margin-bottom: 1.5rem;

    span {
      margin-right: 1rem;
      font-size: 1.06rem;
      font-weight: 500;
      letter-spacing: 0.9px;
    }

    .element {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`;

export const ProjectsSection = styled.section`
  width: 80%;
  margin: auto;

  h2 {
    margin: 0 0 1rem -1rem;
    color: rgba(0, 0, 0, 0.85);
    text-transform: capitalize;
  }

  hr {
    border-color: rgba(0, 0, 0, 0.125);
  }
`;

//rgba(223,223,223)
//#999
