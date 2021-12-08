import styled from "styled-components";

const ExtendFlexAttrs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const theme = {
  navbarColor: "#1DBBB5",
  contactBg: `linear-gradient(
    90deg,
    rgba(94, 79, 171, 1) 0%,
    rgba(106, 81, 164, 1) 70%,
    rgba(114, 82, 157, 1) 100%
  )`,
  white: "#fff",
  black: "#000",
  grayLight: "#eee",
  grayStrong: "#808080",
};

export const NavigationBar = styled(ExtendFlexAttrs).attrs({
  as: "nav",
})`
  max-height: 48px;
  margin-bottom: 4rem;

  .fa-hamburger {
    display: none;
    @media (max-width: 780px) {
      display: inherit;
      margin: 0.4rem 1rem;
    }
  }
`;

export const Picture = styled(ExtendFlexAttrs).attrs((props) => ({
  as: "picture",
  image: props.image,
}))`
  margin-top: 0.1rem;
  margin-right: 6vw;

  @media (max-width: 780px) {
    flex: 1;
    justify-content: flex-start;
  }
  div {
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
  }

  h3 {
    margin-left: 0.6rem;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Menu = styled(ExtendFlexAttrs).attrs({
  as: "ul",
})`
  justify-content: space-between;
  @media (min-width: 980px) {
    flex: 0.5;
  }
  a {
    position: relative;
    margin-bottom: 2px;
    padding: 1rem 2rem 0.8rem 2rem;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.grayStrong};
    font-size: 14.5px;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.black};
    }

    &::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.12rem;
      background: ${(props) => props.theme.contactBg};
      z-index: 5;
      transform: scale(0, 1);
      transition: transform 0.33s ease-out;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  .skewedDiv {
    margin: 0 -20px 0 0;
    padding: 0.8rem 0;
    background-color: ${(props) => props.theme.white};
    z-index: 2;
    transform: skew(-40deg);

    button {
      margin-right: 1rem;
      background-color: ${(props) => props.theme.white};
      border: none;
      transform: skew(40deg);
    }

    a {
      margin-right: 0.2rem;
      padding-bottom: 0.8rem;
    }
  }

  .activeLink {
    color: ${(props) => props.theme.black};
    font-weight: 500;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const ContactLi = styled(ExtendFlexAttrs)`
  flex: 1;
  justify-content: flex-end;
  position: relative;
  padding: 0.5rem 0;
  background: ${(props) => props.theme.contactBg};
  @media (min-width: 980px) {
    flex: 0.5;
  }

  /* MUI Button with router Link */
  a {
    margin-right: 1rem;
    padding: 0.3rem 1rem;
    background-color: ${(props) => props.theme.white};
    color: #252525; // #2e2e2e
    font-size: 15px;
    font-weight: 600;
    border-radius: 25px;
    // Change MUI values
    font-family: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: unset;

    &:hover {
      background-color: ${(props) => props.theme.white};
    }
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
