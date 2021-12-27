import Tooltip from "@mui/material/Tooltip";
import { styled as styledMUI } from "@mui/material/styles";
import styled from "styled-components";

export const StyledSectionTitle = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0 auto;

  h1 {
    margin: 0 0 2px -2.5rem;
    color: rgb(0, 0, 0, 0.2); //0.2
    font-size: 1.35rem;
  }

  hr {
    width: 100%;
    border: 1px solid #fff;
    border-top: 1px solid rgb(0, 0, 0, 0.07);
    margin-bottom: 0.3rem;
  }
`;

export const StyledAboutMe = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem;
  width: 770px;
  margin: 6rem auto 5rem auto;
  padding: 1.8rem 2rem 1.6rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.06); //0.06
  border-radius: 20px;

  p {
    font-family: "Gotham LsLight";
    font-size: 15.6px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.6;

    &:not(:first-child) {
      margin-top: 1rem; // 1.15rem
    }

    &:last-child {
      margin-top: 1.5rem;
    }
  }

  img {
    width: 310px;
    border-radius: 50%;
  }
`;

export const StyledTechs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.5px;
  max-width: 90%;

  span {
    margin: 0.225rem 0.5rem 0.225rem 0;
    padding: 0 0.6rem;
    border-radius: 2.5px;
    color: ${({ theme }) => theme.textColor};
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 13.5px;
  }
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem; //1.65rem
  margin: auto;
  font-size: 2.5rem; //2.25rem

  svg {
    cursor: pointer;
    color: #000;
  }

  .linkedin:hover {
    color: #0a66c2;
  }
`;

export const CustomizedToolTip = styledMUI(({ className, ...props }) => (
  <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
))(` 
  font-size: 0.75rem; 
`);
