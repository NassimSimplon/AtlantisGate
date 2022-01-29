import axios from "axios";
 export const getPlaylists = () =>async(dispatch) =>{
    try{
        const res = await axios.get('http://localhost:4000/Atlantis/Playlists/getAll');
       return dispatch({type:"SUCCED",payload:res.data})
    }catch(err) {
        console.log(err)

    }
}