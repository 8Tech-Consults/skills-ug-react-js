/* eslint-disable react-refresh/only-export-components */
import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { LayoutSplashScreen } from "../../../../_metronic/layout/core";
import { AuthModel } from "./_models";
import * as authHelper from "./AuthHelpers";
import { WithChildren } from "../../../../_metronic/helpers";
import { DB_TOKEN, DB_LOGGED_IN_PROFILE } from "../../../../Constants";
import Utils from "../../../services/Utils";
import { ProfileModel } from "../../../models/ProfileModel";
import { ManifestModel } from "../../../models/Manifest";
import { JobSeekerManifest } from "../../../models/JobSeekerManifest";

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: ProfileModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<ProfileModel | undefined>>;
  manifest: ManifestModel | undefined;
  setManifest: Dispatch<SetStateAction<ManifestModel | undefined>>;
  jobseekerManifest: JobSeekerManifest | undefined;
  setJobseekerManifest: Dispatch<SetStateAction<JobSeekerManifest | undefined>>;
  logout: () => void;
  fetchManifest: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  manifest: undefined,
  setManifest: () => {

  },
  jobseekerManifest: undefined,
  setJobseekerManifest: () => {},
  logout: () => {},
  fetchManifest: () => {},
};

 

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<ProfileModel | undefined>();
  const [manifest, setManifest] = useState<ManifestModel | undefined>();
  const [jobseekerManifest, setJobseekerManifest] = useState<
    JobSeekerManifest | undefined
  >();

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };
  

  const fetchManifest = async () => {
    alert("fetchManifest"); 
    try {
      const manifest = await ManifestModel.getItems();
      setManifest(manifest);
    } catch (error) {
      console.error("Error fetching manifest:", error);
    }

    try {
      if (currentUser) {
        const jobseekerManifest = await JobSeekerManifest.getItems();
        setJobseekerManifest(jobseekerManifest);
      }
    } catch (error) {
      console.error("Error fetching jobseeker manifest:", error);
    }
  } 

  const logout = async () => {
    try {
      Utils.deleteFromDatabase(DB_TOKEN);
      Utils.deleteFromDatabase(DB_LOGGED_IN_PROFILE);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      alert("Error logging out. Please try again.");
      console.error(error);
    }
    saveAuth(undefined);
    setCurrentUser(undefined);
    setManifest(undefined);
    setJobseekerManifest(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        saveAuth,
        currentUser,
        setCurrentUser,
        manifest,
        setManifest,
        jobseekerManifest,
        setJobseekerManifest,
        logout,
        fetchManifest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { currentUser, setCurrentUser, setManifest, setJobseekerManifest } =
    useAuth();
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const fetchManifest = async () => {
    try {
      const manifest = await ManifestModel.getItems();
      (manifest.CATEGORIES.length > 0 ? manifest : undefined);
      setManifest(manifest);
    } catch (error) {
      console.error("Error fetching manifest:", error);
    }

    try {
      if (currentUser) {
        const jobseekerManifest = await JobSeekerManifest.getItems();
        setJobseekerManifest(jobseekerManifest);
      }
    } catch (error) {
      console.error("Error fetching jobseeker manifest:", error);
    }
  };

  useEffect(() => {
    try {
      if (!currentUser) {
        const userData = Utils.loadFromDatabase(DB_LOGGED_IN_PROFILE);
        if (userData) {
          setCurrentUser(userData);
        }
      }
      fetchManifest();
    } catch (error) {
      console.error(error);
    } finally {
      setShowSplashScreen(false);
    }
  }, [currentUser, setCurrentUser, setManifest, setJobseekerManifest]);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
