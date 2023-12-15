// Variaveis que são Globais que podem ser utilizadas perante toda a aplicação

import { create } from "zustand";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStore = create((set) => {
  const auth = getAuth(); // Pega o usuario do firebase

  // Inicialize o estado com base no estado atual de autenticação
  onAuthStateChanged(auth, (user) => {
    set({ isAuthenticated: user });
  });

  return {
    isAuthenticated: null,
    email: null,
    setAuthenticated: (value) => set({ isAuthenticated: value }),
    setEmail: (value) => set({ email: value }),
  };
});

export default useAuthStore;
