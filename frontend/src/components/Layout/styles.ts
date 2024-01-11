import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background.lightGray};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .content {
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; */
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  /* .translate {
    height: 100%;
    align-items: center;
    margin-right: 4rem;
    padding-top: 0.5rem;
  } */

  .sidebar {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-shadow: -5px 1px 20px #00000029;

    section {
      overflow-y: auto;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;
      padding-top: 3vh;

      button {
        border: none;
        background-color: transparent;
        width: 100%;
      }

      .link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: ${({ theme }) => theme.colors.typography.gray};
        font-family: 'Visby Bold', sans-serif;
        font-size: 1.15rem;
        text-decoration: none;
        transition: all 0.2s ease;
        position: relative;
        padding: 5px 10px 5px 25px;
        width: 100%;

        :last-child {
          width: 100%;
        }

        ::after {
          content: '';
          height: 48px;
          width: 5px;
          border-radius: 5px;
          transition: all 0.2s ease;
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.light.mediumLight};
          color: ${({ theme }) => theme.colors.light.mediumDark};
        }

        .link-text {
          width: 100%;
          margin-left: 16px;
        }
      }

      .linkSelected {
        ::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.secondary.main};
          transition: all 0.2s ease;
          position: absolute;
        }

        color: ${({ theme }) => theme.colors.primary.main};
      }

      .linkNotSelected {
        ::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.typography.gray};
          transition: all 0.2s ease;
          position: absolute;
        }
      }
    }
  }
`;

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  height: 15%;
  position: relative;
  padding: 20px 20px 10px 20px;

  /* 
  .logo {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;

    svg {
      margin: 20px 0px 0px 30px;
    }
  }

  .bars {
    cursor: pointer;
    font-size: 1.5rem;

    img {
      width: 60px;
      height: 71px;
    }

    svg {
      margin: 0px 0px 10px 4px;
      width: 30px;
      height: 30px;
    }
  } */

  small {
    font-weight: bold;
    font-size: 0.75rem;
    position: absolute;
    top: 4.3rem;
    left: 4.2rem;

    animation: 1s ease 0s normal forwards 1 showSmall;
  }

  .openCloseMenuBox {
    position: absolute;
    right: 0px;
  }

  @keyframes showSmall {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const OpenCloseMenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background.white};
  border: 1px solid ${({ theme }) => theme.colors.light.mediumLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  top: calc(50%-15px);
  right: -15px;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 1px 4px #00000029;

  svg {
    color: ${({ theme }) => theme.colors.primary.mediumDark};
    width: 20px;
    height: 20px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;

  img {
    height: 100%;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Box = styled.div`
  margin-left: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const BoxLogout = styled.div`
  display: flex;
  margin-top: auto;

  .logoutButton {
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: 'Visby Bold', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    transition: all 0.2s ease;
    position: relative;
    padding: 10px 10px 10px 25px;
    width: 100%;

    svg {
      margin-right: 15px;
    }
  }
`;

export const Divider = styled.hr`
  width: 75%;
  border: 0.1px solid ${({ theme }) => theme.colors.light.mediumLight};
  border-radius: 100%;

  svg {
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

export const UserPhoto = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.typography.white};
  font-family: 'Visby Bold', sans-serif;
  font-size: 24px;
`;

export const UserName = styled.div`
  .text-name {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;

    p {
      color: ${({ theme }) => theme.colors.typography.white};
      font-family: 'Visby Bold', sans-serif;
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    small {
      color: ${({ theme }) => theme.colors.typography.lightGray};
      font-family: 'Visby Regular', sans-serif;
      font-size: 12px;
    }
  }
`;

export const ChildrenContainer = styled.main`
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  padding: 0px 30px 50px 30px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background.lightGray};

  .children-box {
    display: flex;
    flex-direction: column;
    min-height: 87%;
    width: 100%;
    border-radius: 20px;
    padding: 40px 60px;
    box-shadow: 0px 1px 6px #00000029;
    background-color: ${({ theme }) => theme.colors.background.white};
  }
`;
export const TitleBox = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  padding-bottom: 30px;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.background.lightGray};
`;
