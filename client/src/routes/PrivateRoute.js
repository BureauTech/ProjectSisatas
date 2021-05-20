import Menu from "../components/Menu/Menu";

const PrivateRoute = (props) => {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
};

export default PrivateRoute;
