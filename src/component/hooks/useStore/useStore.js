import React from "react";
import { create } from 'zustand';

export default function useStoreLogIn(){

    // const LogUser = {name: "carlos", mail: "carlos@gmail.com"}
    
    const useStore = create((set) => ({
        loggedIn: {name: "carlos", mail: "carlos@gmail.com"},
        logIn: () => set((state) => ({loggedIn: state.user})),
        logOut: () => set({loggedIn: {}})
    }))

    return(
        useStore
    )
}