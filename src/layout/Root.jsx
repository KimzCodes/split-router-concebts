import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>The Layout</h1>
      <Link to="">Home</Link> | <Link to="faq">FAQ</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
