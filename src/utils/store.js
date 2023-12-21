import { create } from "zustand";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStore = create((set) => {
  const auth = getAuth(); // Pega o usuário do Firebase

  // Inicialize o estado com base no estado atual de autenticação
  onAuthStateChanged(auth, (user) => {
    set({ isAuthenticated: Boolean(user), user: user });
  });

  return {
    isAuthenticated: null,
    user: null, // Adicionando o novo estado 'user' para armazenar as informações do usuário logado
    email: null,
    setAuthenticated: (value) => set({ isAuthenticated: value }),
    setEmail: (value) => set({ email: value }),
  };
});

export default useAuthStore;
