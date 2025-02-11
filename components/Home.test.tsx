import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders the HomeSvg component", () => {
    render(<Home />);
    const homeSvgElement = screen.getByRole("img", { hidden: true });
    expect(homeSvgElement).toBeInTheDocument();
  });

  it('renders the heading with text "Home"', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Home/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("applies the correct styles to the container div", () => {
    render(<Home />);
    const containerDiv = screen.getByRole("main");
    expect(containerDiv).toHaveClass(
      "relative my-[1rem] mx-auto rounded-[12px] shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] max-w-[1280px] w-full flex flex-row justify-center items-center"
    );
  });

  //   it("applies the correct styles to the background div", () => {
  //     render(<Home />);
  //     const backgroundDiv = screen.getByRole("presentation");
  //     expect(backgroundDiv).toHaveClass(
  //       "bg-blue-600 absolute w-full h-full z-[-1] rounded-[12px] opacity-60"
  //     );
  //   });
});
