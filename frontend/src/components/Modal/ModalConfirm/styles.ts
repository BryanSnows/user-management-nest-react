import styled from 'styled-components';

interface IButton {
  fontColor?: string;
  hoverColor?: string;
}

export const Button = styled.button<IButton>`
  min-width: 60px;
  height: 35px;
  border-radius: 3px;
  padding: 0 2px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ fontColor }) => fontColor};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    transition: background-color 0.2s ease-in;
  }
`;
