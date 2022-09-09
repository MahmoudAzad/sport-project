import { SETUSERDATA } from "./usefulTypes";

const initialState = {
    user : undefined
}

const usefulReducer = (state = initialState , action) =>{
    switch (action.type) {
        case SETUSERDATA :
            state.user = action.payload.user;
            return{
                ...state ,
                user : state.user = action.payload.user
            }
    }
}



export default usefulReducer;