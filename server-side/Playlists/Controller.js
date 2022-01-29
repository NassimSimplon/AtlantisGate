const PLAYLIST = require("./Model");
 

module.exports = {
  //add_Playlist

  addPlaylist: async (req, res) => {
    const playlist = req.body.playlist;
 
    try {
      const Playlist =  await new PLAYLIST({
        playlist
      
      });
      await Playlist.save();
      res.json(Playlist);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllPlaylists

  getAllPlaylists: async (req, res) => {
    try {
      const Playlist = await PLAYLIST.find();
      res.json(Playlist);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deletePlaylist

  deletePlaylist: async (req, res) => {
    try {
      const Playlist = await PLAYLIST.findByIdAndDelete(req.params.id);
      res.json(Playlist);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updatePlaylist

  updatePlaylist: async (req, res) => {
    try {
      const Playlist = await PLAYLIST.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Playlist);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getPlaylist

  getPlaylist: async (req, res) => {
    try {
      const Playlist = await PLAYLIST.findById(req.params.id);
      res.json(Playlist);
    } catch (error) {
      console.error(error.message);
    }
  },
};