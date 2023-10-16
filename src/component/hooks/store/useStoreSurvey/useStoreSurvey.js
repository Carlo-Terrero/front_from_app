import { create } from "zustand";
import axios from "axios";

export const useStoreSurvey = create((set) => ({
    getSurveys: axios.get("http://localhost:8000/api/surveys")
                    .then(response => response.data[0]),
    
}));