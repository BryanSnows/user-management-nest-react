import React, { ReactNode, useState } from 'react';
import { ButtonZoom, Container, Wrapper } from './styles';
import {
  BsArrowsAngleExpand as ExpandIcon,
  BsArrowsAngleContract as ContractIcon,
} from 'react-icons/bs';
import { ExternalInterfaceProps } from './types';
import { useTheme } from 'styled-components';
import { Overlay } from '../../styles/litlemodal';

const ExternalInterface = ({ ip }: ExternalInterfaceProps) => {
  const { colors: theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  function expandorContract(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  }

  function renderOverlay(children: ReactNode) {
    if (isExpanded) {
      return (
        <Overlay>
          <Wrapper>{children}</Wrapper>
        </Overlay>
      );
    } else {
      return children;
    }
  }

  return (
    <>
      {renderOverlay(
        <Container isExpanded={isExpanded}>
          <ButtonZoom onClick={expandorContract}>
            {isExpanded ? (
              <ContractIcon size={20} color={theme.typography.white} />
            ) : (
              <ExpandIcon size={20} color={theme.typography.white} />
            )}
          </ButtonZoom>
          <iframe
            // src={`http://${ip}:8001//vnc.html?host=${ip}&port=8001`}
            src={`http://10.30.1.82:8001/vnc_auto.html?host=10.30.1.82&port=8001`}
            width="100%"
            height="100%"
            title="Interface Externa"
          />
        </Container>,
      )}
    </>
  );
};

export default ExternalInterface;
