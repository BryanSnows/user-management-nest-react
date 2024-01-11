import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.mediumGray};
`;

export const Banner = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.mediumGray};
  box-sizing: border-box;

  h1 {
    margin-left: 5rem;
    margin-top: 5rem;
    max-width: 25rem;
  }

  img {
    width: 100%;
  }
`;

export const BoxLanguage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 6rem;
`;

export const BoxLogin = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 1.25rem 0 0 1.25rem;
  box-shadow: -0.3rem 0 1.25rem #0000000d;
`;

export const ContainerLogin = styled.div`
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > img {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const WelcomeText = styled.form`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding-top: 2rem;
`;
