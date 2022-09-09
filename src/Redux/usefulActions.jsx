import { SETUSERDATA } from "./usefulTypes"

export const setUserData = (user) =>{
    return{
        type : SETUSERDATA,
        payload : {
            user
        }
    }
}