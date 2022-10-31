import { render } from "@testing-library/react";

import { App } from "../app";

const subject = () => render(<App />);

describe("App", () => {
  it("matches snapshot", () => {
    const { asFragment } = subject();

    expect(asFragment()).toMatchSnapshot();
  });
});
