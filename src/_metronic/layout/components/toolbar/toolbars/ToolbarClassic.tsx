import clsx from "clsx";
import { useState } from "react";
import { KTIcon } from "../../../../helpers";
import { CreateAppModal, Dropdown1 } from "../../../../partials";
import { useLayout } from "../../../core";

interface ToolbarClassicProps {
  onRefresh?: () => void;
}

const ToolbarClassic: React.FC<ToolbarClassicProps> = ({ onRefresh }) => {
  const { config } = useLayout();
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? "btn-light"
    : "bg-body btn-color-gray-700 btn-active-color-primary";

  return (
    <div className="d-flex align-items-center gap-2 gap-lg-3">
      {config.app?.toolbar?.daterangepickerButton && (
        <div
          data-kt-daterangepicker="true"
          data-kt-daterangepicker-opens="left"
          className={clsx(
            "btn btn-sm fw-bold  d-flex align-items-center px-4",
            daterangepickerButtonClass
          )}
        >
          <div className="text-gray-600 fw-bold">Loading date range...</div>
          <KTIcon iconName="calendar-8" className="fs-1 ms-2 me-0" />
        </div>
      )}

      {config.app?.toolbar?.secondaryButton && (
        <a href="#" className="btn btn-sm btn-flex btn-light fw-bold">
          Filter
        </a>
      )}

      {config.app?.toolbar?.primaryButton && (
        <a
          href="#"
          onClick={onRefresh}
          className="btn btn-sm fw-bold btn-primary"
        >
          REFRESH
        </a>
      )}
    </div>
  );
};

export { ToolbarClassic };
