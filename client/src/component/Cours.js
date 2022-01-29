import React ,{useState,useEffect}from 'react'
import door from '../images/header.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {getPlaylists} from '../redux/cours/action'
import {useSelector,useDispatch} from 'react-redux'
const Cours = () => {
    const list  = useSelector((state)=>state.playListStore.playlist)
    const dispatch = useDispatch()
  
     useEffect(()=>{
      dispatch(getPlaylists())
  
    },[list])
    const saveId =(id)=>{
        window.localStorage.setItem('listID',id)
 

    }
  
    return (
        <div className="mt-5">
            <h1 className="cour-title mt-5">كورسات بوابة اتلانتس
            </h1>
            <br/>  <br/>
            {list.map(el=>(

            <div className="container-fluid mt-5" key={el._id} >
                
                <div className="row  cour-card" key={el.playlist[0]._id} >
                    <div className="col-md-7  col-sm-12   col-xl-9 col-lg-8  col-xxl-9" >
                        <div className='cour-card-content p-3'>
                            <h1 className='cour-card-title  '> {el.playlist[0].title }
                            </h1>
                            <br />

                            <p className="cour-card-paragraphe ">{el.playlist[0].description }   </p>    <br />
                            <Link to={`/Playlist`}><button className="cour-btn " href='#one-tit' onClick={()=>saveId(el._id)}>تفاصيل  </button> </Link>
                        </div> <br /></div>
                    <div className="col-md-5  col-sm-12   col-lg-4  col-xl-3  col-xxl-3" id='test-card' >
                        <img className="cour-card-img p-3" src={el.playlist[0].image} />
                    </div>



                </div>
     
            </div>
            ))}

         
        </div>
    )
}

export default Cours
