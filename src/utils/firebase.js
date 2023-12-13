import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_DOMAIN,
  projectId: "private-class-ddfa5",
  storageBucket: "private-class-ddfa5.appspot.com",
  messagingSenderId: "699454608493",
  appId: "1:699454608493:web:828951a04de1d288755b64",
};

// Inicialize o Firebase com a configuração
export const firebaseApp = initializeApp(firebaseConfig);

export default firebaseConfig;
