import { lazy, FC, Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";

import.meta.env.VITE_APP_BASE_LAYOUT_CONFIG_KEY || "LayoutConfig";
import {
  DefaultConfig,
  ILayout,
  LayoutSetup,
} from "../../_metronic/layout/core";
import { adminLayoutConfig } from "../../_metronic/layout/core/layoutConfigs";
import CompanyProfileEditPage from "../pages/private/profile-edit/CompanyProfileEditPage";
const LAYOUT_CONFIG_KEY =
  import.meta.env.VITE_APP_BASE_LAYOUT_CONFIG_KEY || "LayoutConfig";

const PrivateRoutes = () => {
  const ProfileEditPage = lazy(
    () => import("../pages/private/profile-edit/ProfileEditPage")
  );

  const MyCVPage = lazy(() => import("../pages/private/MyCVPage"));
  const MyJobApplicationsPage = lazy(
    () => import("../pages/private/MyJobApplicationsPage")
  );
  const MyShortListedJobApplicationsPage = lazy(
    () => import("../pages/private/MyShortListedJobApplicationsPage")
  );
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const JobCreatePage = lazy(
    () => import("../pages/private/profile-edit/JobCreatePage")
  );
  const JobsPage = lazy(() => import("../pages/private/profile-edit/JobsPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  const [tab, setTab] = useState("Sidebar");
  const [config, setConfig] = useState<ILayout>(adminLayoutConfig);
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
          if (myLocalLayout.app.sidebar.display == false) {
            shouldSetPrivateLayout = true;
          }
        }
      }
    }
    if (shouldSetPrivateLayout) {
      setConfigLoading(true);
      try {
        LayoutSetup.setConfig(adminLayoutConfig);
        window.location.reload();
      } catch (error) {
        alert(
          "Failed to update layout config. Please check console for more info."
        );
        //   setConfig(getLayoutFromLocalStorage());
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
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />
        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="my-cv"
          element={
            <SuspensedView>
              <MyCVPage />
            </SuspensedView>
          }
        />
        <Route
          path="my-job-applications"
          element={
            <SuspensedView>
              <MyJobApplicationsPage />
            </SuspensedView>
          }
        />
        <Route
          path="my-job-interviews"
          element={
            <SuspensedView>
              <MyShortListedJobApplicationsPage />
            </SuspensedView>
          }
        />
        <Route
          path="jobs"
          element={
            <SuspensedView>
              <JobsPage />
            </SuspensedView>
          }
        />
        <Route
          path="job-create"
          element={
            <SuspensedView>
              <JobCreatePage />
            </SuspensedView>
          }
        />
        <Route
          path="company-profile-edit"
          element={
            <SuspensedView>
              <CompanyProfileEditPage />
            </SuspensedView>
          }
        />
        <Route
          path="profile-edit/*"
          element={
            <SuspensedView>
              <ProfileEditPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        <Route path="*" element={<DashboardWrapper />} />

        {/*      <Route path="*" element={<Navigate to="/error/404" />} /> */}
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

export { PrivateRoutes };
