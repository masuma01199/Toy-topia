import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
updateProfile,
GoogleAuthProvider,
signInWithPopup,
} from 'firebase/auth';


const AuthContext = createContext();


export function useAuth() { return useContext(AuthContext); }


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const unsub = onAuthStateChanged(auth, (u) => {
setUser(u);
setLoading(false);
});
return unsub;
}, []);


const register = (email, password, name, photoURL) =>
createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
updateProfile(user, { displayName: name, photoURL }).then(() => user)
);


const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);
const updateUserProfile = (profile) => updateProfile(auth.currentUser, profile);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, googleProvider);


const value = { user, loading, register, login, logout, updateUserProfile, signInWithGoogle };


return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}