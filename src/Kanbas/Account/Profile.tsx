import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-page" className="mt-5">
      <h1 >Profile</h1>
      <div className="mb-3">
        <input id="wd-username" placeholder="Username" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-password" placeholder="Password" type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-firstname" placeholder="First Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-lastname" placeholder="Last Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-dob" placeholder="2000-01-01" type="date" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-email" placeholder="alice@wonderland" type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-role" placeholder="User" className="form-control" />
      </div>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}