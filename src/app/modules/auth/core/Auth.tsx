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

type AuthContextProps = {
  auth: AuthModel | undefined;
  saveAuth: (auth: AuthModel | undefined) => void;
  currentUser: ProfileModel | undefined;
  setCurrentUser: Dispatch<SetStateAction<ProfileModel | undefined>>;
  logout: () => void;
};

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState<ProfileModel | undefined>();
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

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
  };

  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, currentUser, logout, setCurrentUser } = useAuth();
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    try {
      if (!currentUser) {
        const data = Utils.loadFromDatabase(DB_LOGGED_IN_PROFILE);
        if (data) {
          setCurrentUser(data);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
    }

    setShowSplashScreen(false);
    // eslint-disable-next-line
  }, []);

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export { AuthProvider, AuthInit, useAuth };
