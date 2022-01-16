import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, query, runTransaction, serverTimestamp, updateDoc, where } from "firebase/firestore";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../firebase";

export default NextAuth({
     providers: [
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
     ],
     //adapter: FirebaseAdapter({ db, collection, query, getDocs, where, limit, doc, getDoc, addDoc, updateDoc, deleteDoc, runTransaction, serverTimestamp }),
     secret: process.env.SECRET_AUTH_KEY,
})