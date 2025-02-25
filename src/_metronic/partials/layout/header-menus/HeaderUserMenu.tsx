import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";
import { toAbsoluteUrl } from "../../../helpers";
import { ThemeModeSwitcher } from "../theme-mode/ThemeModeSwitcher";
import { ThemeModeSwitcher2 } from "../theme-mode/ThemeModeSwitcher2";
import Utils from "../../../../app/services/Utils";

const HeaderUserMenu: FC = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src={Utils.img(currentUser?.avatar)} />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.first_name} {currentUser?.last_name}
              <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                Pro
              </span>
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to="admin" className="menu-link px-5">
          My Dashboard
        </Link>
      </div>
      <div className="menu-item px-5">
        <Link to={"/admin/my-job-applications"} className="menu-link px-5">
          My Job Applications
        </Link>
      </div>

      <div className="menu-item px-5">
        <a href="/admin/my-job-offers" className="menu-link px-5">
          <span className="menu-text">My Job Offers</span>
          <span className="menu-badge">
            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
              3
            </span>
          </span>
        </a>
      </div>

      <div
        className="menu-item px-5"
        data-kt-menu-trigger="hover"
        data-kt-menu-placement="left-start"
        data-kt-menu-flip="bottom"
      >
        <a href="#" className="menu-link px-5">
          <span className="menu-title">Update My Profile</span>
          <span className="menu-arrow"></span>
        </a>

        <div className="menu-sub menu-sub-dropdown w-175px py-4">
          <div className="menu-item px-3">
            <Link to="/admin/profile-edit/photo" className="menu-link px-5">
              Change Profile Photo
            </Link>
          </div>

          <div className="menu-item px-3">
            <Link to="/admin/profile-edit/bio" className="menu-link px-5">
              Update Biodata
            </Link>
          </div>

          <div className="menu-item px-3">
            <Link to="/admin/profile-edit/education" className="menu-link px-5">
              Education & Training
            </Link>
          </div>

          <div className="menu-item px-3">
            <Link
              to="/admin/profile-edit/employment"
              className="menu-link px-5"
            >
              Employment History
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="View your statements"
              ></i>
            </Link>
          </div>
          <div className="menu-item px-3">
            <Link
              to="/admin/profile-edit/accomplishment"
              className="menu-link px-5"
            >
              Accomplishments
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title="View your statements"
              ></i>
            </Link>
          </div>

          {/*   <div className="separator my-2"></div>

          <div className="menu-item px-3">
            <div className="menu-content px-3">
              <label className="form-check form-switch form-check-custom form-check-solid">
                <input
                  className="form-check-input w-30px h-20px"
                  type="checkbox"
                  value="1"
                  defaultChecked={true}
                  name="notifications"
                />
                <span className="form-check-label text-muted fs-7">
                  Notifications
                </span>
              </label>
            </div>
          </div> */}
        </div>
      </div>

      <div className="menu-item px-5">
        <a href="/admin/my-cv" className="menu-link px-5">
          Download My CV
        </a>
      </div>

      <div className="separator my-2"></div>

      <ThemeModeSwitcher2 />

      <div className="menu-item px-5 my-1">
        <Link to="/crafted/account/settings" className="menu-link px-5">
          Account Settings
        </Link>
      </div>

      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
