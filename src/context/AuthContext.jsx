import { createContext, useContext, useEffect, useState } from "react";
import fireDB from "../crud/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const auth = getAuth(fireDB);
const fireStore = getFirestore(fireDB);

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (email, password, name, lastname) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name,
        lastname
      );

      const docRef = await setDoc(
        doc(fireStore, "users", userCredential.user.uid),
        {
          name: name,
          lastname: lastname,
          email: email,
        }
      );

      const userDoc = await getDoc(docRef);
      const userInfo = userDoc.data();

      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, register, error, user, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
