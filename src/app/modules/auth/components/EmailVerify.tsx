import { useEffect, useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { useAuth } from "../core/Auth";
import { http_post } from "../../../services/Api";
import { toast } from "react-toastify";
import Utils from "../../../services/Utils";
import { DB_LOGGED_IN_PROFILE } from "../core/AuthHelpers";

// Schema for email verification (using "code" instead of "password")
const verifySchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  code: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Verification code is required"),
});

export function EmailVerify() {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const { saveAuth, setCurrentUser, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // If not logged in, inform the user and redirect to login
  useEffect(() => {
    if (!currentUser) {
      toast.info("You are not logged in. Please login first.");
      navigate("/auth/login");
    }
  }, [currentUser, navigate]);

  const formik = useFormik({
    initialValues: {
      email: currentUser?.email || "",
      code: "",
    },
    validationSchema: verifySchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setStatus("");
      setSubmitting(true);
      setLoading(true);

      try {
        const payload = {
          email: values.email,
          code: values.code,
        };

        // Call the email-verify endpoint
        var data = await http_post(`/email-verify`, payload);

        if (data.verification != "Yes") {
          throw new Error("Email verification is not successful");
        }

        toast.success("Email verified successfully!");
        Utils.saveToDatabase(DB_LOGGED_IN_PROFILE, data);

        // Optionally update the auth state if needed:
        // setCurrentUser({ ...currentUser, verified: true });
        // And then navigate to the protected area:
        location.href = "/admin/dashboard";
      } catch (err: any) {
        setStatus(err.toString());
        toast.error(err.toString());
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  // Handler to resend verification code
  const handleResendCode = async () => {
    setResendLoading(true);
    try {
      await http_post(`/email-code-resend`, { email: currentUser?.email });
      toast.success("Verification code resent successfully!");
    } catch (err: any) {
      toast.error("Failed to resend verification code. " + err.toString());
    } finally {
      setResendLoading(false);
    }
  };

  // Handler to cancel the process and log the user out
  const handleCancel = async () => {
    // If a logout function is provided by your auth context, call it.
    if (logout) {
      await logout();
    } else {
      setCurrentUser(undefined);
    }
    toast.info("You have been logged out.");
    navigate("/auth/login");
  };

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_email_verify_form"
    >
      <div className="text-center mb-11">
        <div className="text-gray-500 fw-semibold fs-6">Email Verification</div>
        <h1 className="text-gray-900 fw-bolder mb-3 mt-1">Verify Your Email</h1>
        <div className="mb-12">
          <img
            alt="Logo"
            src={toAbsoluteUrl("media/logos/logo.svg")}
            className="h-75px"
          />
        </div>
      </div>

      {formik.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}

      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-gray-900">Email</label>
        <input
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={clsx("form-control bg-transparent", {
            "is-invalid": formik.touched.email && formik.errors.email,
            "is-valid": formik.touched.email && !formik.errors.email,
          })}
          type="email"
          name="email"
          autoComplete="off"
          disabled
          readOnly
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )}
      </div>

      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
          Enter the verification code sent to your email address
        </label>
        <input
          autoComplete="off"
          {...formik.getFieldProps("code")}
          className={clsx("form-control bg-transparent", {
            "is-invalid": formik.touched.code && formik.errors.code,
            "is-valid": formik.touched.code && !formik.errors.code,
          })}
          type="text"
          name="code"
        />
        {formik.touched.code && formik.errors.code && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.code}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div>
          <button
            type="button"
            className="btn btn-link"
            onClick={handleResendCode}
            disabled={resendLoading}
          >
            {resendLoading
              ? "Resending..."
              : "Did not receive the code? Resend Code"}
          </button>
        </div>
      </div>

      <div className="d-grid mb-10">
        <button
          type="submit"
          id="kt_verify_submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Verify Email</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>

      <div className="text-gray-500 text-center fw-semibold fs-6">
        Want to cancel?{" "}
        <button
          type="button"
          className="btn btn-link text-danger fw-bolder"
          onClick={handleCancel}
        >
          Logout
        </button>
      </div>
    </form>
  );
}
