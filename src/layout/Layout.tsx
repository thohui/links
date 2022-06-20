import { PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
