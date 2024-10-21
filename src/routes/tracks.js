// Track-related routes

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// GET /tracks - Retrieve all tracks
router.get('/', async (req, res) => {
  const tracks = await prisma.track.findMany();
  res.json(tracks);
});

// GET /tracks/:id - Retrieve a specific track
router.get('/:id', async (req, res) => {
  const track = await prisma.track.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (!track) return res.status(404).send('Track not found');
  res.json(track);
});

module.exports = router;
