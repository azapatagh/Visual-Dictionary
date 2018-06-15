import React from "react";
import { render } from "react-testing-library";
import App from "./index.jsx";

describe("<App />", () => {
  const store = {
    subscribe: () => null,
    dispatch: () => null,
    getState: () => null
  };
  let props = { header: "Visual Dictionary", store };

  it("Should render self", () => {
    const { container, queryByText } = render(<App {...props} />);
    expect(container.firstChild).toMatchSnapshot();
    const header = queryByText(props.header);
    expect(header.innerHTML).toBe(props.header);
  });

  it("Should render a <SearchBox /> component", () => {
    const { container } = render(<App {...props} />);
    const searchBox = container.querySelectorAll(".SearchBox");
    expect(searchBox.length).toBe(1);
  });

  it("Should render a <SearchResults /> component", () => {
    const { container } = render(<App {...props} />);
    const results = container.querySelectorAll(".SearchResults");
    expect(results.length).toBe(1);
  });
});
