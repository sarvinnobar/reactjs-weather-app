import "../Styles/Container.css";

const Container = ({ children }) => {
  return <div className="shadow-2xl container__div ">{children}</div>;
};

export default Container;
