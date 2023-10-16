import { create } from "zustand";

import { useAxios } from "../../useAxios/useAxios";

export const useStoreSurvey = create((set) => ({
    surveyList: [],
    getSurveys: async () => {
        const surveyList = await useAxios.get(
            "/surveys"
        ).then(resp => resp.data);
        
        set(state => ({
            ...state,
            surveyList
        }))
    },
    deleteSurveys: async(element) => {
        await useAxios.delete(
            `/survey/${element.id}`
        ).then(resp => 
            {
                alert("Cliente Eliminado")
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    },
    postSurveys: async(element) => {
        const respuesta = await useAxios.post(
            `/survey`, element
        ).then(resp => 
            {
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    },
    putSurveys: async(element) => {
        const respuesta = await useAxios.put(
            `/api/survey${element.id}`, element
        ).then(resp => 
            {
                return resp
            }
        ).catch((error) =>{
            return error;
        });
    }
}));