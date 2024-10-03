import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1233 Angular JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 Node JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1232 Vue JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1231 Next JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1236 Express JS
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1237 MongoDB
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <img src="/images/reactjs.jpg" width="100%" height={160}  alt=""/>
          <div className="card-body">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <h5 className="wd-dashboard-course-title card-title">
                 CS1239 Firebase
              </h5>
            </Link>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </Link>
          </div>
          </div>
        </div>
        
        
        </div>
      </div>
    </div>
  );
}