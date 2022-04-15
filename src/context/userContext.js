import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged 
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentuser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });
  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };
  return (
    <UserContext.Provider value={{ toggleModals, modalState, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
