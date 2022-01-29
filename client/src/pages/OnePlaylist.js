import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
import { getPlaylists } from '../redux/cours/action'
import { useSelector, useDispatch } from 'react-redux'
const OnePlaylist = () => {
    const cour = useSelector((state) => state.playListStore.playlist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaylists())

    }, [cour])
    const saveIt = (id) => { window.localStorage.setItem('vidId', id) }
    return (
        <div className="mt-5">

            <br />
            <div className="mt-5">
                <h1 className="cour-title mt-5" id='one-tit'> عناوين الكورس
                </h1>

                <div>

                </div>
                {cour.filter(x => x._id === localStorage.getItem('listID')).map(el => (

                    <div className="container-fluid mt-5"  >
                        {el.playlist.map(i => (

                            <div className="row  cour-card"  >
                                <div className="col-lg-9  col-md-12 col-sm-12   " >
                                    <div className='cour-card-content p-3'>
                                        <h1 className='cour-card-title  '> {i.title}
                                        </h1>
                                        <br />

                                        <p className="cour-card-paragraphe ">{i.description}   </p>    <br />
                                        <Link to={`/Video/${i._id} `}><button className="cour-btn " onClick={() => saveIt(i._id)} >مشاهدة  </button> </Link>
                                    </div> <br /></div>
                                <div className="col-lg-3 col-md-12 col-sm-12" id='test-card' >
                                    <img className="cour-card-img p-3" src={i.image} />
                                </div>



                            </div>))}

                    </div>
                ))}


                <br /><br />
            </div>

        </div>
    )
}

export default OnePlaylist
