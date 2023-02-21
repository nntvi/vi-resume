import { Fragment, useContext } from "react";
// import BlogPostNew, { BlogPostClassic } from "../components/BlogPost";
import Context from "../context/context";
const ContentContainer = ({ children, blog }) => {
  const { nav } = useContext(Context);
  return (
    <Fragment>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
};
export default ContentContainer;
