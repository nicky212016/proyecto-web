import { createContext, useContext, useEffect, useState } from "react";
import fireDB from "../firebase/credentials";
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

  const signUp = async ({email, password, name, lastname}) => {
    try {
      console.log("Creating user");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User created");
      const docRef = doc(fireStore, "users", userCredential.user.uid);
      await setDoc(docRef, {
        name,
        email,
        lastname,
      });

      const userDoc = await getDoc(docRef);
      const userInfo = userDoc.data();

      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else if (error.code === "permission-denied") {
        setError("Insufficient permissions");
      } else if (error.code === "auth/weak-password") {
        setError("Weak password");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      } else if (error.code === "auth/invalid-credential") {
        setError("Invalid credential");
      } else if (error.code === "auth/operation-not-allowed") {
        setError("Operation not allowed");
      } else {
        setError(error.message);
      }
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
      value={{ login, logout, signUp, error, user, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
