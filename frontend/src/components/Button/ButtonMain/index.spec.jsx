import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonMain } from "./index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../assets/styles/themes/theme";

describe("ButtonMain", () => {
  it("should render the component without errors", () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Test Label" />
      </ThemeProvider>
    );

    render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Custom Label" />
      </ThemeProvider>
    );

    render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Test Label" className="custom-class" />
      </ThemeProvider>
    );


    render(
      <ThemeProvider theme={theme}>
        <ButtonMain />
      </ThemeProvider>
    );
   
  });

  it("should handle click event correctly", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Test Button" onClick={mockOnClick}/>
      </ThemeProvider>
    );

    const buttonElement = getByText("Test Button");

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);

  });

  it("should render the component without errors", () => {
    
    render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Test Label" />
      </ThemeProvider>
    );
    
    
    render(
      <ThemeProvider theme={theme}>
        <ButtonMain label="Test Label" disabled />
      </ThemeProvider>
    );
    
    
    const buttonElement = screen.getAllByText("Test Label");
    expect(buttonElement).toBeDisabled();
  });
});