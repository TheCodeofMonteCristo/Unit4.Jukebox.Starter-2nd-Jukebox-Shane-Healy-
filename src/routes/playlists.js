// Playlist-related routes

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// GET /playlists - Retrieve all playlists
router.get('/', async (req, res) => {
  const playlists = await prisma.playlist.findMany({
    include: { tracks: true }, // Include tracks in each playlist
  });
  res.json(playlists);
});

// POST /playlists - Create a new playlist
router.post('/', async (req, res) => {
  const { name, description, ownerId, trackIds } = req.body;

  const newPlaylist = await prisma.playlist.create({
    data: {
      name,
      description,
      owner: { connect: { id: ownerId } },
      tracks: { connect: trackIds.map(id => ({ id })) },
    },
  });

  res.status(201).json(newPlaylist);
});

// GET /playlists/:id - Retrieve a specific playlist with its tracks
router.get('/:id', async (req, res) => {
  const playlist = await prisma.playlist.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { tracks: true }, // Include tracks in the playlist
  });
  if (!playlist) return res.status(404).send('Playlist not found');
  res.json(playlist);
});

module.exports = router;
