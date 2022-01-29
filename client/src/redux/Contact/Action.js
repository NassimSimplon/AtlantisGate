import axios from 'axios'
export const addContact = (contact) => async (dispatch) =>{
    try{
        const res = await axios.post('http://localhost:4000/Atlantis/Contact/add', {...contact})
        return dispatch({type:"ADD_CONTACT",payload:res.data})
    }catch(err){
        console.log(err)    
    }
}