import styled from "styled-components";

export const theme = {
  navbarColor: "#1DBBB5",
  contactBg: `linear-gradient(
    90deg,
    rgba(94, 79, 171, 1) 0%,
    rgba(106, 81, 164, 1) 70%,
    rgba(114, 82, 157, 1) 100%
  )`,
  bgColorGray: "#eee",
  colorWhite: "#fff",
  colorBlack: "#000",
  colorGrayLight: "#757575",
};

const ExtendFlexAttrs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationBar = styled(ExtendFlexAttrs).attrs({
  as: "nav",
})`
  max-height: 48px;
  overflow: hidden;
`;

export const Picture = styled(ExtendFlexAttrs).attrs((props) => ({
  as: "picture",
  image: props.image,
}))`
  padding-left: 1rem;
  margin-right: 6vw;
  div {
    width: 36px;
    height: 36px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 100%;
  }

  h3 {
    margin-left: 0.5rem;
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
    padding: 1rem 2rem 0.6rem 2rem;
    background: ${(props) => props.theme.colorWhite};
    color: ${(props) => props.theme.colorGrayLight};
    font-size: 14.5px;
    text-decoration: none;

    &::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.1rem;
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
    background-color: ${(props) => props.theme.colorWhite};
    z-index: 2;
    transform: skew(-40deg);

    button {
      margin-right: 1rem;
      background-color: ${(props) => props.theme.colorWhite};
      border: none;
      transform: skew(40deg);
    }

    a {
      margin-right: 0.2rem;
      padding: 1.2rem 2rem 0.8rem 2rem;
    }
  }

  .activeLink {
    color: ${(props) => props.theme.colorBlack};
    font-weight: 500;
  }
`;

export const ContactLi = styled.div`
  max-width: 50%;
  padding: 0.5rem 0;
  background: ${(props) => props.theme.contactBg};
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  @media (min-width: 980px) {
    flex: 0.5;
  }

  a {
    margin-right: 1rem;
    padding: 0.3rem 1rem;
    color: #2e2e2e;
    background-color: ${(props) => props.theme.colorWhite};
    font-size: 15px;
    font-weight: 600;
    border-radius: 25px;
    text-decoration: none;

    &::after {
      content: none;
    }
  }
`;
