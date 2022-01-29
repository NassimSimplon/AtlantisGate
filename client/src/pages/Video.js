import React, { useEffect, useState } from 'react'
import { getPlaylists } from '../redux/cours/action'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../component/Comments'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
const Video = () => {
    const list = useSelector((state) => state.playListStore.playlist)

    const dispatch = useDispatch()
    const idVideo = window.localStorage.getItem('vidId')
    const token = window.localStorage.getItem('token')
    const final = jwtDecode(token)
    const [comment, setComment] = useState({
        image: final.image,
        fullName: final.fullName,
        videoID: idVideo,
        comment: ""
    })
    const result = () => {

        axios.post('http://localhost:4000/Atlantis/Comments/add', { ...comment }).then(res => {
            console.log(res.data);


        })
    }

    useEffect(() => {
        dispatch(getPlaylists())


    }, [])

    return (
        <div>
            {list.filter(x => x._id === localStorage.getItem('listID')).map(el => (

                <div className="container-fluid mt-4" key={el._id}>
                    {el.playlist.filter(x => x._id == window.localStorage.getItem('vidId')).map(i => (
                        <div key={i._id}>  <br />
                            <h1 className='video-title mt-5'>{i.title}</h1>
                            <br />
                            <div className="row mt-5 one-video-section"  >
                                <video controls poster={i.image} className='one-video'>
                                    <source src={i.video} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    ))}
                    <br />
                  <br />
                <br />
            </div>
            ))}
            <form onSubmit={result}>
                <input type="text" onChange={(e) => setComment({ ...comment, comment: e.target.value })} />
                <input type="submit" />
            </form>
            <Comments />
            <br />
           <br />
          <br />
        </div>
    )
}

export default Video
