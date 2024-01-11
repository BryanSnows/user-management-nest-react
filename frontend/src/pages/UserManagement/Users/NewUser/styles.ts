import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  flex-grow: 1;
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
`;

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

export const CreateUserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  flex-grow: 1;
`;

export const CreateUserWrapper = styled.div`
  height: 100%;
  width: 75%;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 5px;
`;
