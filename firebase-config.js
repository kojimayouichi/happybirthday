import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js';

// =====================================================
// 🔧 ここを自分のFirebaseプロジェクト設定に差し替えてください
// =====================================================
const firebaseConfig = {
    apiKey: "AIzaSyDdb_VGlhBs8CCMmY5O14V_EJcKRRcgj-Q",
    authDomain: "happybirthday-dd880.firebaseapp.com",
    projectId: "happybirthday-dd880",
    storageBucket: "happybirthday-dd880.firebasestorage.app",
    messagingSenderId: "936206563051",
    appId: "1:936206563051:web:d8681cd31f740cf1ad30ae"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
