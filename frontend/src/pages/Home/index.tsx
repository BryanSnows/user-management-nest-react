import { Header2, Header4 } from "../../styles/typography";
import banner from "../../assets/images/home-image.png";
import { Container } from "./styles";
import { useTheme } from "styled-components";

export const Home = () => {
  const { colors: theme } = useTheme();

  return (
    <Container>
      <Header2>
        Sistema de controle por Inteligência Artificial para CNC.
      </Header2>
      <img src={banner} alt="machine-illustration" />
      <Header4 fontColor={theme.dark.light}>
        Seja bem-vindo(a) ao software de gerenciamento e inspeção de tubos de
        cobre.
      </Header4>
    </Container>
  );
};
