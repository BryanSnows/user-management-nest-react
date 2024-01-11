import { IMultiButtonsProps } from "./types";
import { Button, ContainerButtons, SectionContainer } from "./styles";
import { Header6 } from "../../styles/typography";

export default function MultiButton({
  onSelectButton,
  selectedTransactionIds,
  sections,
}: IMultiButtonsProps) {
  return (
    <>
      {sections?.map((section) => (
        <SectionContainer key={section.id}>
          <div style={{ width: "100px", marginRight: "100px" }}>
            <Header6>{section.title}</Header6>
          </div>
          <ContainerButtons>
            {section.data.map((element) => (
              <Button
                key={element.id}
                active={selectedTransactionIds[section.id] == element.id}
                onClick={(event) => {
                  event.preventDefault();
                  onSelectButton(section.id, element.id);
                }}
              >
                {element.icon}
                {element.name}
              </Button>
            ))}
          </ContainerButtons>
        </SectionContainer>
      ))}
    </>
  );
}
