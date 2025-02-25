import { render, fireEvent } from "@testing-library/react-native";
import ThemeSwitcher from "../app/theme_switcher";

jest.mock("../src/contexts/themeContext", () => ({
  useTheme: jest.fn(),
}));

describe("<ThemeSwitcher />", () => {
  test("chama toggleTheme ao pressionar o botão", () => {
    const mockToggleTheme = jest.fn();

    require("../src/contexts/themeContext").useTheme.mockReturnValue({
      theme: { colors: { background: "white" } },
      isDark: false,
      toggleTheme: mockToggleTheme,
    });

    const { getByText } = render(<ThemeSwitcher />);
    const button = getByText("Tema atual Light");

    fireEvent.press(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
