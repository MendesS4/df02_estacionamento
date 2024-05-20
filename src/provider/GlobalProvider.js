import { createContext, useContext, useState, useMemo } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = useMemo(() => [
    {
      placa: 'TST-1234',
      dono: 'Samuel Mendes',
      numeroApartamento: '602',
      bloco: 'H',
      modelo: 'Scort',
      cor: 'Branco',
      numeroVaga: '1',
      reserved: true
    },
    ...Array.from({ length: 17 }, (_, i) => ({
      numeroVaga: i + 2,
      reserved: false
    }))
  ], []);

  const [reservations, setReservations] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ reservations, setReservations }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
