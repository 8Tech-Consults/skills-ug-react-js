import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSave } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  TextInput,
  SelectInput,
  TextArea,
} from "../../../components/FormComponents";
import { COUNTRIES } from "../../../../Constants";
import { useAuth } from "../../../modules/auth";
import { http_post } from "../../../services/Api";
import { Content } from "../../../../_metronic/layout/components/content";
import { ToolbarWrapper } from "../../../../_metronic/layout/components/toolbar";
import { PageTitle } from "../../../../_metronic/layout/core";
import { ProfileModel } from "../../../models/ProfileModel";
import Utils from "../../../services/Utils";

const fadeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10 },
};

const companyCategories = [
  "Agriculture",
  "Technology",
  "Manufacturing",
  "Healthcare",
  "Construction",
  "Education",
  "Finance",
];

const employeeRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required("Company name is required"),
  company_country: Yup.string().required("Country is required"),
  company_address: Yup.string().required("Address is required"),
  company_main_category_id: Yup.string().required("Main category is required"),
  company_phone_number: Yup.string()
    .matches(/^[+]?[0-9]{8,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  contact_person_phone: Yup.string()
    .matches(/^[+]?[0-9]{8,15}$/, "Invalid phone number")
    .required("Contact phone is required"),
  company_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  company_website_url: Yup.string().url("Invalid website URL"),
  company_facebook_url: Yup.string().url("Invalid Facebook URL"),
  company_linkedin_url: Yup.string().url("Invalid LinkedIn URL"),
});

const CompanyRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      toast.error("Please login to register a company");
      navigate("/login");
    } else {
      // Initialize form with existing company data
      if (currentUser.company_logo) {
        setLogoPreview(currentUser.company_logo);
      }
    }
  }, [currentUser, navigate]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setLogoPreview(URL.createObjectURL(file));
        setLogoFile(file);
      }
    },
  });

  const removeLogo = () => {
    if (logoPreview) {
      URL.revokeObjectURL(logoPreview);
      setLogoPreview(null);
      setLogoFile(null);
    }
  };

  const handleSubmit = async (values: any, actions: any) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const formData = new FormData();

      // Append all form values from currentUser
      Object.entries(values).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      // Handle logo update
      if (logoFile) {
        formData.append("company_logo", logoFile);
      } else if (currentUser?.company_logo) {
        formData.append("company_logo", currentUser.company_logo);
      }

      const response = await http_post("profile", formData);

      // Update user context
      const userData = ProfileModel.fromJson(
        JSON.stringify({
          ...currentUser,
          ...response.data,
        })
      );
      setCurrentUser(userData);
      Utils.saveProfile(userData);

      toast.success("Company details updated successfully");
      // navigate("/dashboard");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Update failed");
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setIsLoading(false);
      actions.setSubmitting(false);
    }
  };

  if (!currentUser) return null;

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: "Company Profile",
            path: "/company/profile",
            isActive: true,
          },
        ]}
      >
        Company Registration
      </PageTitle>
      <ToolbarWrapper />

      <Content>
        <AnimatePresence mode="wait">
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isLoading && (
              <motion.div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25"
                style={{ zIndex: 9999 }}
              >
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </motion.div>
            )}

            <div className="card card-custom">
              <div className="card-body mx-auto" style={{ maxWidth: "800px" }}>
                {errorMessage && (
                  <motion.div
                    className="alert alert-danger mb-5"
                    variants={fadeVariant}
                    role="alert"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {successMessage && (
                  <motion.div
                    className="alert alert-success mb-5"
                    variants={fadeVariant}
                    role="alert"
                  >
                    {successMessage}
                  </motion.div>
                )}

                <Formik
                  initialValues={{
                    ...currentUser,
                    company_year_of_establishment:
                      currentUser.company_year_of_establishment
                        ? new Date(currentUser.company_year_of_establishment)
                        : null,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, setFieldValue, isSubmitting }) => (
                    <Form className="form w-100">
                      {/* Logo Dropzone */}
                      <div className="row mb-8">
                        <div className="col-12 text-center">
                          <div
                            {...getRootProps()}
                            className="dropzone border-dashed rounded-2 p-8"
                            style={{
                              border: "2px dashed #E4E6EF",
                              backgroundColor: logoPreview
                                ? "transparent"
                                : "#F9F9F9",
                              cursor: "pointer",
                              minHeight: "200px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "relative",
                            }}
                          >
                            <input {...getInputProps()} />
                            {logoPreview ? (
                              <div className="position-relative">
                                <img
                                  src={logoPreview}
                                  alt="Company logo preview"
                                  className="img-fluid rounded-2"
                                  style={{ maxHeight: "180px" }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-icon btn-danger position-absolute top-0 end-0 m-2"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeLogo();
                                  }}
                                >
                                  <FiX size={18} />
                                </button>
                              </div>
                            ) : (
                              <div className="text-center">
                                <div className="fs-4 fw-bold text-gray-600">
                                  Drag & drop company logo here
                                  <br />
                                  or click to upload
                                </div>
                                <div className="text-muted fs-7 mt-3">
                                  Recommended size: 500x500 pixels
                                  <br />
                                  Supported formats: .png, .jpg, .jpeg
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Company Information */}
                      <div className="row g-5">
                        <div className="col-12">
                          <h2 className="mb-5">Company Information</h2>
                          <div className="row g-4">
                            <div className="col-md-6">
                              <Field
                                name="company_name"
                                label="Company Name *"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">
                                Year of Establishment
                              </label>
                              <DatePicker
                                selected={values.company_year_of_establishment}
                                onChange={(date) =>
                                  setFieldValue(
                                    "company_year_of_establishment",
                                    date
                                  )
                                }
                                showYearPicker
                                dateFormat="yyyy"
                                className="form-control"
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_employees_range"
                                label="Company Size"
                                options={employeeRanges.map((r) => ({
                                  value: r,
                                  label: r,
                                }))}
                                component={SelectInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_country"
                                label="Country *"
                                options={COUNTRIES}
                                component={SelectInput}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Address Section */}
                        <div className="col-12">
                          <h3 className="mb-5">Company Address</h3>
                          <div className="row g-4">
                            <div className="col-md-12">
                              <Field
                                name="company_address"
                                label="Full Address *"
                                component={TextArea}
                              />
                            </div>
                            <div className="col-md-4">
                              <Field
                                name="company_district_id"
                                label="District"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-4">
                              <Field
                                name="company_sub_county_id"
                                label="Sub-County"
                                component={TextInput}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div className="col-12">
                          <h3 className="mb-5">Contact Details</h3>
                          <div className="row g-4">
                            <div className="col-md-6">
                              <Field
                                name="company_phone_number"
                                label="Company Phone *"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_email"
                                label="Company Email *"
                                type="email"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-4">
                              <Field
                                name="contact_person_name"
                                label="Contact Person Name *"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-4">
                              <Field
                                name="contact_person_phone"
                                label="Contact Person Phone *"
                                component={TextInput}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Business Details */}
                        <div className="col-12">
                          <h3 className="mb-5">Business Details</h3>
                          <div className="row g-4">
                            <div className="col-md-6">
                              <Field
                                name="company_main_category_id"
                                label="Main Business Category *"
                                options={companyCategories.map((c) => ({
                                  value: c,
                                  label: c,
                                }))}
                                component={SelectInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_sub_category_id"
                                label="Sub-Category"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-12">
                              <Field
                                name="company_description"
                                label="Business Description"
                                component={TextArea}
                                rows={4}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_trade_license_no"
                                label="Trade License Number"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_tax_id"
                                label="Tax ID Number"
                                component={TextInput}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Additional Information */}
                        <div className="col-12">
                          <h3 className="mb-5">Additional Information</h3>
                          <div className="row g-4">
                            <div className="col-md-6">
                              <Field
                                name="company_website_url"
                                label="Website URL"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_linkedin_url"
                                label="LinkedIn URL"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_facebook_url"
                                label="Facebook URL"
                                component={TextInput}
                              />
                            </div>
                            <div className="col-md-6">
                              <Field
                                name="company_operating_hours"
                                label="Operating Hours"
                                component={TextInput}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Disability Inclusion */}
                        <div className="col-12">
                          <h3 className="mb-5">Disability Inclusion</h3>
                          <div className="row g-4">
                            <div className="col-md-4">
                              <Field
                                name="company_has_accessibility"
                                label="Accessible Facilities"
                                options={[
                                  { value: "Yes", label: "Yes" },
                                  { value: "No", label: "No" },
                                ]}
                                component={SelectInput}
                              />
                            </div>
                            <div className="col-md-4">
                              <Field
                                name="company_has_disability_inclusion_policy"
                                label="Inclusion Policy"
                                options={[
                                  { value: "Yes", label: "Yes" },
                                  { value: "No", label: "No" },
                                ]}
                                component={SelectInput}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 mt-5">
                          <div className="d-flex justify-content-end gap-3">
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => navigate("/")}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <FiSave className="me-2" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <FiSave className="me-2" />
                                  {currentUser.company_name
                                    ? "Update"
                                    : "Register"}{" "}
                                  Company
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Content>
    </>
  );
};

export default CompanyRegistrationPage;
