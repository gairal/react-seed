import { FCWithChildren } from "~/src/app/types";

export const Header: FCWithChildren = ({ children }) => (
  <header>
    <h1 className="p-2 text-3xl">{children}</h1>
    <hr className="mb-4 border" />
  </header>
);
