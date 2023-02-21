import { Fragment } from "react";
const Summary = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Summary</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="text-box">
              My expertise spans across <b>ReactJS</b> and <b>Angular </b>
              frameworks, enabling me to create responsive, high-performance,
              and scalable web solutions.
            </div>
          </div>

          <div
            className="col col-d-12 col-t-12 col-m-12 border-line-v"
            style={{ paddingTop: "0px" }}
          >
            <div className="text-box">
              As a passionate learner, I am always exploring new technologies,
              tools, and frameworks to stay ahead of the curve. I enjoy working
              with cross-functional teams and building advanced web solutions
              that meet customer needs.
            </div>
          </div>

          <div
            className="col col-d-12 col-t-12 col-m-12 border-line-v"
            style={{ paddingTop: "0px" }}
          >
            <div className="text-box">
              I am passionate about creating beautiful and functional user
              interfaces and am always looking for new challenges and
              opportunities to grow as a developer.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Summary;
