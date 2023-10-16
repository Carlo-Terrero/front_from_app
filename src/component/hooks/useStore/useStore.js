import { create } from 'zustand';

export const useStoreLogIn = create((set) => ({
    loggedIn: JSON.parse(localStorage.getItem("userForm")),
    logIn: (newLogIn) => set({loggedIn: newLogIn}),
    logOut: (newLogIn) => set({loggedIn: newLogIn})
}))