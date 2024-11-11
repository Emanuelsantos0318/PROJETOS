// Configurações do Firebase - necessárias para conectar o app ao projeto no Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDIFdPriIK8rqNfgJMpFK5VQgYzqhMbRv0",
    authDomain: "projetotcc-533ea.firebaseapp.com",
    projectId: "projetotcc-533ea",
    storageBucket: "projetotcc-533ea.appspot.com",
    messagingSenderId: "1042563222031",
    appId: "1:1042563222031:web:999857bdf6bf83c152f17a",
    measurementId: "G-3Q0BQEN5B8"
  };
  
  // Inicialização do Firebase com a configuração fornecida
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const db = firebase.firestore();