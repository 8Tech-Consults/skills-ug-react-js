import { lazy, FC, Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import { ILayout, LayoutSetup } from "../../_metronic/layout/core";
import { DefaultConfig } from "../../_metronic/layout/core";
import { LandingPage } from "../pages/public/LandingPage";
import JobListingPage from "../pages/public/JobListingPage";

const LAYOUT_CONFIG_KEY =
  import.meta.env.VITE_APP_BASE_LAYOUT_CONFIG_KEY || "LayoutConfig";

const PublicRoutes = () => {
  const JobDetailPage = lazy(() => import("../pages/public/JobDetailPage"));
  const EmployeeDetailsPage = lazy(
    () => import("../pages/public/EmployeeDetailsPage")
  );
  const EightLearningLandingPage = lazy(
    () => import("../pages/public/8learningLandingPage")
  );
  const ApplyJobPage = lazy(() => import("../pages/public/ApplyJobPage"));
  const CvBankPage = lazy(() => import("../pages/public/CvBankPage"));
  const CvPDFPage = lazy(() => import("../pages/public/CvPDFPage"));
  const EmployersPage = lazy(() => import("../pages/public/EmployersPage"));
  const InterviewTipsPage = lazy(() => import("../pages/public/InterviewTipsPage"));
  const CareerResourcesPage = lazy(() => import("../pages/public/CareerResourcesPage")); 
  const CareerGuidancePage = lazy(() => import("../pages/public/CareerGuidancePage"));  
  const EmployerFAQPage = lazy(() => import("../pages/public/EmployerFAQPage"));
  const CoverLetterGuidePage = lazy(() => import("../pages/public/CoverLetterGuidePage"));
  const SalaryGuidePage = lazy(() => import("../pages/public/SalaryGuidePage"));
  const SiteMapPage = lazy(() => import("../pages/public/SiteMapPage"));  
  const AboutUsPage = lazy(() => import("../pages/public/AboutUsPage"));
  const TermsAndConditionsPage = lazy(
    () => import("../pages/public/TermsAndConditionsPage")
  );
  const PrivacyPolicyPage = lazy(
    () => import("../pages/public/PrivacyPolicyPage")
  );
  const DisabilityInclusionPage = lazy(
    () => import("../pages/public/DisabilityInclusionPage")
  );
  const ContactUsPage = lazy(() => import("../pages/public/ContactUsPage"));
  const JobSeekerFAQPage = lazy(
    () => import("../pages/public/JobSeekerFAQPage")
  );
  const AccessibilityStatementPage = lazy(
    () => import("../pages/public/AccessibilityStatementPage")
  );
  const [tab, setTab] = useState("Sidebar");
  const [config, setConfig] = useState<ILayout>(DefaultConfig);
  const [configLoading, setConfigLoading] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState<boolean>(false);

  const updatePrivate = () => {
    var shouldSetPrivateLayout = false;
    const ls = localStorage.getItem(LAYOUT_CONFIG_KEY);
    var myLocalLayout = DefaultConfig;
    if (ls) {
      try {
        myLocalLayout = JSON.parse(ls) as ILayout;
      } catch (er) {
        myLocalLayout = DefaultConfig;
      }
    }

    if (myLocalLayout != null && myLocalLayout != undefined) {
      if (myLocalLayout.app != null && myLocalLayout.app != undefined) {
        if (
          myLocalLayout.app.sidebar != null &&
          myLocalLayout.app.sidebar != undefined
        ) {
          if (myLocalLayout.app.sidebar.display != false) {
            shouldSetPrivateLayout = true;
          }
        }
      }
    }
    if (shouldSetPrivateLayout) {
      setConfigLoading(true);
      document.body.classList.remove("data-kt-app-sidebar-enabled");

      try {
        LayoutSetup.setConfig(DefaultConfig);
        window.location.reload();
      } catch (error) {
        alert(
          "Failed to update layout config. Please check console for more info."
        );
        setConfigLoading(false);
      }
    }
  };

  // useEffect(() => {
  useEffect(() => {
    updatePrivate();
  });

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route
          path="/"
          element={
            <SuspensedView>
              <LandingPage />
            </SuspensedView>
          }
        />
        <Route
          path="cv-bank"
          element={
            <SuspensedView>
              <CvBankPage />
            </SuspensedView>
          }
        />
        <Route
          path="about"
          element={
            <SuspensedView>
              <AboutUsPage />
            </SuspensedView>
          }
        />
        <Route
          path="terms"
          element={
            <SuspensedView>
              <TermsAndConditionsPage />
            </SuspensedView>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <SuspensedView>
              <PrivacyPolicyPage />
            </SuspensedView>
          }
        />
        <Route
          path="cover-letter"
          element={
            <SuspensedView>
              <CoverLetterGuidePage />
            </SuspensedView>
          }
        />
        <Route
          path="salary-guide"
          element={
            <SuspensedView>
              <SalaryGuidePage />
            </SuspensedView>
          }
        />
        <Route
          path="employer-faq"
          element={
            <SuspensedView>
              <EmployerFAQPage />
            </SuspensedView>
          }
        />
        <Route
          path="accessibility"
          element={
            <SuspensedView>
              <AccessibilityStatementPage />
            </SuspensedView>
          }
        />
        <Route
          path="interview-tips"
          element={
            <SuspensedView>
              <InterviewTipsPage />
            </SuspensedView>
          }
        />
        <Route
          path="jobseekers-faq"
          element={
            <SuspensedView>
              <JobSeekerFAQPage />
            </SuspensedView>
          }
        />
        <Route
          path="contact"
          element={
            <SuspensedView>
              <ContactUsPage />
            </SuspensedView>
          }
        />
        <Route
          path="8learning"
          element={
            <SuspensedView>
              <EightLearningLandingPage />
            </SuspensedView>
          }
        />
        <Route
          path="employers"
          element={
            <SuspensedView>
              <EmployersPage />
            </SuspensedView>
          }
        />
        <Route
          path="disability-inclusion"
          element={
            <SuspensedView>
              <DisabilityInclusionPage />
            </SuspensedView>
          }
        />
        <Route
          path="sitemap"
          element={
            <SuspensedView>
              <SiteMapPage />
            </SuspensedView>
          }
        />
        <Route
          path="career-resources"
          element={
            <SuspensedView>
              <CareerResourcesPage />
            </SuspensedView>
          }
        />

         <Route
          path="career-guidance"
          element={
            <SuspensedView>
              <CareerGuidancePage />
            </SuspensedView>
          }
        />
        <Route
          path="jobs"
          element={
            <SuspensedView>
              <JobListingPage />
            </SuspensedView>
          }
        />
        <Route
          path="jobs/:id"
          element={
            <SuspensedView>
              <JobDetailPage />
            </SuspensedView>
          }
        />
        <Route
          path="employers/:id"
          element={
            <SuspensedView>
              <EmployeeDetailsPage />
            </SuspensedView>
          }
        />
        <Route
          path="cv-bank/:id"
          element={
            <SuspensedView>
              <CvPDFPage />
            </SuspensedView>
          }
        />
        <Route
          path="jobs/:id/apply"
          element={
            <SuspensedView>
              <ApplyJobPage />
            </SuspensedView>
          }
        />
        <Route
          path="*"
          element={
            <SuspensedView>
              <LandingPage />
            </SuspensedView>
          }
        />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PublicRoutes };
