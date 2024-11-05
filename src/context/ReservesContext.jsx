import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import fireDB from "../crud/firebase";
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
export const ReservesProvider = ({ Children }) => {
  const [reserves, setReserves] = useState([]);
  const createReserve = async (
    room,
    studentCode,
    phone,
    start,
    end,
    reason
  ) => {
    const reserveId = uuidv4();
    try {
      const docRef = await setDoc(doc(fireStore, "reserves", reserveId), {
        room: room,
        studentCode: studentCode,
        phone: phone,
        start: start,
        end: end,
        reason: reason,
      });
      console.log("Document written with ID: ", docRef.id);
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
    const q = query(collection(fireStore, "reserves"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      reserves.push(doc.data());
    });
    setReserves(reserves);
  };
};

export const useReserves = () => {
  const reserves = useContext(ReservesContext);
  if (!reserves) {
    throw new Error("useReserves must be used within a ReservesProvider");
  }
  return reserves;
};
