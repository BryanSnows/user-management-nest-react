import styled from "styled-components";

interface isSubMenuOpen {
  isMenuOpen?: boolean;
}

export const PlusMinusIconContainer = styled.div<isSubMenuOpen>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;

  svg {
    height: 17px;
    width: 17px;
  }
`;

export const ToggleContainer = styled.div`
  cursor: pointer;
`;

export const SubMenuContainer = styled.div`
  & > .link {
    padding-left: 60px !important;

    & > div {
      margin-left: 30px;
    }
  }
`;
