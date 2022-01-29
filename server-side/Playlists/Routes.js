const express = require('express')
const router = express.Router()
 const Playlist = require('./Controller');

 // add Playlist 
 router.post('/Playlist/add',Playlist.addPlaylist)
 // get all Playlists
 router.get('/Playlists/getAll',Playlist.getAllPlaylists)
 //delete Playlist
 router.delete('/Playlist/delete/:id',Playlist.deletePlaylist)
 //update Playlist 
 router.put('/Playlist/update/:id',Playlist.updatePlaylist)
 // get one Playlist
 router.get('/Playlist/get/:id',Playlist.getPlaylist)

 //Router
 module.exports = router