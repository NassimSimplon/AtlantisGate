const initialState ={
    contact :{
    
    }
}

export const contactReducer = (state = initialState ,action) =>{
    const {type,payload} = action;
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state,
                contact:payload
            }
    }
    return state
}