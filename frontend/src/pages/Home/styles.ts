import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & img {
    width: 100%;
    max-width: 900px;
  }
`;
