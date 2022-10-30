import { FCWithChildren } from '~/src/app/types';

export const Header: FCWithChildren = ({ children }) => (
  <header>
    <h1 className="text-3xl p-2">{children}</h1>
    <hr className="border mb-4" />
  </header>
);
