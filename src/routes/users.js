// User-related routes

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// GET /users - Retrieve all users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// GET /users/:id - Retrieve a specific user with their playlists
router.get('/:id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { playlists: true }, // Include playlists owned by the user
  });
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

module.exports = router;
