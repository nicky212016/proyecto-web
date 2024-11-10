import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import fireDB from "../firebase/credentials";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const auth = getAuth(fireDB);
const fireStore = getFirestore(fireDB);

export const ReservesContext = createContext();
export const ReservesProvider = ({ children }) => {
  const createReserve = async ({
    room,
    studentCode,
    phone,
    start,
    end,
    reason,
  }) => {
    const reserveId = uuidv4();
    try {
      const docRef = doc(fireStore, "reserves", reserveId);
      await setDoc(docRef, {
        room,
        studentCode,
        phone,
        start,
        end,
        reason,
      });
      console.log("Document written with ID: ", reserveId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteReserve = async (reserveId, studentCode) => {
    const userId = auth.currentUser.uid;
    try {
      if (userId !== studentCode) {
        console.error(
          "Error removing document: ",
          "No tienes permiso para eliminar esta reserva"
        );
        return;
      }
      await deleteDoc(doc(fireStore, "reserves", reserveId));
      console.log("Document successfully deleted!");
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const allReserves = async () => {
    const reserves = [];
    const querySnapshot = await getDocs(collection(fireStore, "reserves"));
    querySnapshot.forEach((doc) => {
      reserves.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return reserves;
  };

  return (
    <ReservesContext.Provider
      value={{ createReserve, deleteReserve, allReserves }}
    >
      {children}
    </ReservesContext.Provider>
  );
};

export const useReserves = () => {
  const reserves = useContext(ReservesContext);
  if (!reserves) {
    throw new Error("useReserves must be used within a ReservesProvider");
  }
  return reserves;
};
