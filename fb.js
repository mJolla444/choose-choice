import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getFirestore,collection,addDoc,getDocs,query,where,serverTimestamp} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
const app=initializeApp({
  apiKey:"AIzaSyD-1h4HVNYn2P4RywEmMqSC8Wg2ExjkRZ8",
  authDomain:"choose-choice-33524.firebaseapp.com",
  projectId:"choose-choice-33524",
  storageBucket:"choose-choice-33524.firebasestorage.app",
  messagingSenderId:"940315521482",
  appId:"1:940315521482:web:dfecd961f4c64c285f5f33"
});
const db=getFirestore(app);
window.__fbr({
  async save(col,data){
    const d={...data,createdAt:serverTimestamp()};
    if(col==="providers")d.status="pending";
    await addDoc(collection(db,col),d);
  },
  async approvedProviders(){
    const s=await getDocs(query(collection(db,"providers"),where("status","==","approved")));
    return s.docs.map(x=>({id:x.id,...x.data()}));
  }
});
