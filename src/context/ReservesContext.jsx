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
  const [reserves, setReserves] = useState([]);
  const [reserveData, setReserveData] = useState({
    aula: null,
    piso: null,
    salon: null,
    start: null,
    end: null,
    reason: "",
    studentCode: "",
    phone: "",
  });

  const createReserve = async (newReserve) => {
    const isAvailable = await checkAvailability(
      newReserve.room,
      newReserve.start,
      newReserve.end,
      newReserve.date
    );

    if (isAvailable) {
      const reserveData = {
        start: newReserve.start,
        end: newReserve.end,
        room: newReserve.room,
        reason: newReserve.reason,
        studentCode: newReserve.studentCode,
        phone: newReserve.phone,
        date: newReserve.date,
      };

      await addDoc(collection(db, "reserves"), reserveData);
      setReserves([...reserves, reserveData]);
    } else {
      alert("El salón ya está reservado en este horario. Elija otro horario.");
    }
  };

  const checkAvailability = async (room, start, end, date) => {
    const reservesRef = collection(db, "reserves");
    const q = query(
      reservesRef,
      where("room", "==", room),
      where("date", "==", date)
    );

    const querySnapshot = await getDocs(q);
    let isAvailable = true;

    querySnapshot.forEach((doc) => {
      const reserve = doc.data();

      const reserveStart = reserve.start;
      const reserveEnd = reserve.end;

      if (
        (start >= reserveStart && start < reserveEnd) ||
        (end > reserveStart && end <= reserveEnd) ||
        (start <= reserveStart && end >= reserveEnd)
      ) {
        isAvailable = false;
      }
    });

    return isAvailable;
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

  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date().getTime();
      const reserves = await allReserves();
      reserves.forEach((reserve) => {
        const endTime = new Date(reserve.end).getTime();
        if (now > endTime) deleteReserve(reserve.id);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ReservesContext.Provider
      value={{
        createReserve,
        deleteReserve,
        allReserves,
        reserveData,
        setReserveData,
      }}
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
