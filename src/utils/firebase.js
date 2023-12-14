import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_DOMAIN,
  projectId: import.meta.env.VITE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_API_BUCKET,
  messagingSenderId: import.meta.env.VITE_API_MESSAGING,
  appId: import.meta.env.VITE_API_APPID,
};

// Inicialize o Firebase com a configuração
export const firebaseApp = initializeApp(firebaseConfig);

export default firebaseConfig;
