import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const ContextProvider = createContext();
const provider = new GoogleAuthProvider();

const ContextApi = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  // USER AUTH

  const createUser = async (email, password) => {
    setLoader(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (displayName) => {
    setLoader(true);
    const userImg =
      "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png";
    return await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: userImg,
    });
  };

  const logOutUser = async () => {
    localStorage.removeItem("token");
    return await signOut(auth);
  };

  const loginUser = async (email, password) => {
    setLoader(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    return await signInWithPopup(auth, provider);
  };

  const userContext = {
    loader,
    user,
    createUser,
    updateUser,
    logOutUser,
    loginUser,
    googleLogin,
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoader(false);
      } else {
        setUser(null);
      }
    });

    return () => subscribe();
  }, []);

  return (
    <ContextProvider.Provider value={{ ...userContext }}>
      {children}
    </ContextProvider.Provider>
  );
};

export const Context = () => {
  return useContext(ContextProvider);
};

export default ContextApi;
