import { Header } from "../index";

function Template({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Template;
