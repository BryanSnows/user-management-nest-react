import styled, { css } from 'styled-components';

interface ITypography {
  fontColor?: string;
}

interface IInformation extends ITypography {
  isLabelInformation?: boolean;
}

export const Header1 = styled.h1<ITypography>`
  ${({ theme }) => css`
    font-size: 4rem;
    font-family: 'Visby Heavy';
    color: ${theme.colors.typography.title};
  `}
`;

export const Header2 = styled.h2<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1.5rem;
    font-family: 'Visby Heavy';
    color: ${fontColor ? fontColor : theme.colors.typography.title};
  `}
`;

export const Header3 = styled.h3<ITypography>`
  ${({ theme }) => `
    font-size: 1.2rem;
    font-family: 'Visby Semibold';
    color: ${theme.colors.typography.title};
  `}
`;

export const Header4 = styled.h4<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1.2rem;
    font-family: 'Visby Semibold';
    color: ${fontColor ? fontColor : theme.colors.typography.title};
  `}
`;

export const Header5 = styled.h4<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1.3rem;
    font-family: 'Visby Bold';
    color: ${fontColor ? fontColor : theme.colors.typography.darkGray};
  `}
`;

export const Header6 = styled.h5<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: 'Visby Medium';
    color: ${fontColor ? fontColor : theme.colors.typography.darkGray};
  `}
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: 'Visby Medium';
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Body2 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: 'Visby Semibold';
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const Body3 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 1rem;
    font-family: 'Visby Regular';
    color: ${fontColor ? fontColor : theme.colors.typography.mediumGray};
  `}
`;

export const Body4 = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 0.9rem;
    font-family: 'Visby Regular';
    color: ${fontColor ? fontColor : theme.colors.typography.body};
  `}
`;

export const BodyBlue = styled.p<ITypography>`
  ${({ theme, fontColor }) => css`
    font-size: 0.9rem;
    font-family: 'Visby Semibold';
    color: ${fontColor ? fontColor : theme.colors.typography.blue};
  `}
`;

export const Caption = styled.small<ITypography>`
  ${({ theme }) => css`
    font-size: 0.5rem;
    font-family: 'Visby Medium';
    color: ${theme.colors.typography.body};
  `}
`;

export const Small = styled.small<ITypography>`
  ${({ theme }) => css`
    font-size: 0.5rem;
    font-family: 'Visby Medium';
    color: ${theme.colors.typography.small};
  `}
`;

export const Information1 = styled.p<IInformation>`
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.typography.body)};
  font-family: 'Visby Medium', sans-serif;
  font-size: 12px;
  width: 100%;
  padding-left: ${({ isLabelInformation }) => (isLabelInformation ? 0 : '20px')};
  margin-top: 5px;
`;

export const Information2 = styled.p<ITypography>`
  width: 100%;
  text-align: end;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.typography.blue)};
  font-family: 'Visby Medium', sans-serif;
  font-size: 12px;
`;

export const Information3 = styled.p<ITypography>`
  width: 100%;
  text-align: end;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.danger.main)};
  font-family: 'Visby Medium', sans-serif;
  font-size: 0.8rem;
`;

export const Information4 = styled.p<ITypography>`
  width: 100%;
  text-align: end;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.danger.main)};
  font-family: 'Visby Medium', sans-serif;
  font-size: 0.8rem;
  text-align: left;
`;

export const LabelText = styled.p<ITypography>`
  width: 100%;
  color: ${({ theme, fontColor }) => (fontColor ? fontColor : theme.colors.typography.blue)};
  font-family: 'Visby Bold', sans-serif;
  font-size: 0.9rem;
`;
