import React, { useState } from "react";
import { Link } from "react-router-dom";
import { KTIcon } from "../../../helpers";
import { useAuth } from "../../../../app/modules/auth";
import { Modal } from "react-bootstrap"; // Import Modal from react-bootstrap

const SidebarFooter = () => {
  const { currentUser, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handlePostJobClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (currentUser?.is_company !== "Yes") {
      e.preventDefault();
      setShowModal(true); // Show the modal
    }
  };

  return (
    <div
      className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
      id="kt_app_sidebar_footer"
    >
      <Link
        to="/admin/job-create"
        className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
        data-bs-toggle="tooltip"
        data-bs-trigger="hover"
        data-bs-dismiss-="click"
        title="Metronic Docs & Components"
        onClick={handlePostJobClick}
      >
        <span className="btn-label">POST NEW JOB</span>
      </Link>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register as a Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to register as a company to post a new job.</p>
          <p>
            <Link to="/admin/company-profile-edit">
              Click here to register your company.
            </Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { SidebarFooter };
