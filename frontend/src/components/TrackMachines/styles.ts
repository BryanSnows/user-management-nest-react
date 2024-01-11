import styled from 'styled-components';

interface MachineItemProps {
  selected?: boolean;
}

export const ContentWrapper = styled.div`
  height: 40vh;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

export const WrapperTextRowCenter = styled.div`
  width: 100%;
  height: 30vh;
  flex: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  word-break: break-all;
  text-align: start;
  position: relative;
`;

export const MachineFrame = styled.div`
  /* position: sticky; */
  /* top: 1.5rem; */
  width: 100%;
  height: 100%;
`;

export const MachineList = styled.ul`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 16px;
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.light.light};

  & > div {
    padding: 1rem;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MachineItem = styled.li<MachineItemProps>`
  list-style: none;
  background-color: ${({ theme }) => theme.colors.background.white};
  cursor: pointer;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 16px;
  color: ${({ selected, theme }) => (selected ? theme.colors.typography.white : '')};
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary.main : '')};
  word-break: keep-all;
`;
