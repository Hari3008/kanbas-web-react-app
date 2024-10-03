import { Link, NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <NavLink to={`/Kanbas/Account/Signin`} id="wd-account-signin" className={({ isActive }) =>
          isActive
            ? "list-group-item border border-0 active text-black ps-2"
            : "list-group-item border text-danger border-0"
        }> Signin </NavLink> <br />
      <NavLink to={`/Kanbas/Account/Signup`} id="wd-account-signup" className={({ isActive }) =>
          isActive
            ? "list-group-item border border-0 active text-black ps-2"
            : "list-group-item border text-danger border-0"
        }> Signup </NavLink> <br />
      <NavLink to={`/Kanbas/Account/Profile`} id="wd-account-profile" className={({ isActive }) =>
          isActive
            ? "list-group-item border border-0 active text-black ps-2"
            : "list-group-item border text-danger border-0"
        }> Profile </NavLink> <br />
    </div>
  );
}