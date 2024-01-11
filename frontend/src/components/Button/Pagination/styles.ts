import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem;
`;
export const PaginationBox = styled.div`
  display: flex;
  justify-content: end;
  border-radius: 0px 0px 5px 5px;
`;

export const NavigatorButton = styled.button`
  display: flex;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  padding: 0.1rem;
  border-radius: 50%;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light.mediumLight};
  }
`;

export const CurrentPage = styled.div`
  color: ${({ theme }) => theme.colors.typography.body};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  border-radius: 5px;
`;
