import { create } from "zustand";
import axios from "axios";

export const useStoreSurvey = create((set) => ({
    surveyList: [],
    getSurveys: async () => {
        const surveyList = await axios.get(
            "http://localhost:8000/api/surveys"
        ).then(resp => resp.data);
        
        console.log('dentro')
        set(state => ({
            ...state,
            surveyList
        }))
    },
    deleteSurveys: async(element) => {
        const respuesta = await axios.delete(
            `http://localhost:8000/api/survey/${element.id}`
        ).then(resp => 
            {
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    },
    postSurveys: async(element) => {
        const respuesta = await axios.post(
            `http://localhost:8000/api/survey`, element
        ).then(resp => 
            {
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    },
    putSurveys: async(element) => {
        const respuesta = await axios.put(
            `http://localhost:8000/api/survey${element.id}`, element
        ).then(resp => 
            {
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    }
}));