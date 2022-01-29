import React ,{useEffect,useState}from 'react';
 
 
import axios from 'axios'
const Comments = () => {
   const [comment,setComment] =useState([])
 const result = ()=>{
     axios.get('http://localhost:4000/Atlantis/Comments/getAll').then(res=>{
        console.log(res.data);
        
        setComment(res.data)
    })
 }
 const all = () =>{
     if(comment.videoID !== window.localStorage.getItem('vidId')){
         document.getElementById("all-theComment-section").style.display = "none"
     }else{
        document.getElementById("all-theComment-section").style.display = "block"   
     }
 }
    useEffect(() => {
   
        result()
     
    }, [])
  return (
  <div className='container' id='all-theComment-section'>
      <div className='row'>
          <div className='col-lg-2'></div>
          <div className='col-lg-8 text-center'>
          <div className='comment-Section'>
<br/>
{comment.filter(x => x.videoID == window.localStorage.getItem('vidId')).map(z=>(
    <div className='comment-block' key={z._id}>
    <div className='comment' > 
    <img className='comment-image' src={z.image } alt="user-image" /> 
   <div className='comment-content'>
   <h1 className='comment-name'> {z.fullName}</h1>
    <p className='comment-text'>{z.comment}</p>
       </div>
     </div></div>
))}
  </div>
          </div>
          <div className='col-lg-2'></div>

      </div>
      
  </div>)
};

export default Comments;
