// Prisma seeding script

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create users
  const users = await prisma.user.createMany({
    data: [
      { username: 'user1' },
      { username: 'user2' },
      { username: 'user3' },
      { username: 'user4' },
      { username: 'user5' },
    ],
  });

  // Create tracks
  const tracks = await prisma.track.createMany({
    data: [
      { name: 'Track 1' },
      { name: 'Track 2' },
      { name: 'Track 3' },
      { name: 'Track 4' },
      { name: 'Track 5' },
      { name: 'Track 6' },
      { name: 'Track 7' },
      { name: 'Track 8' },
      { name: 'Track 9' },
      { name: 'Track 10' },
      { name: 'Track 11' },
      { name: 'Track 12' },
      { name: 'Track 13' },
      { name: 'Track 14' },
      { name: 'Track 15' },
      { name: 'Track 16' },
      { name: 'Track 17' },
      { name: 'Track 18' },
      { name: 'Track 19' },
      { name: 'Track 20' },
    ],
  });

  // Create playlists
  const playlists = await prisma.playlist.createMany({
    data: [
      {
        name: 'Playlist 1',
        description: 'Description for Playlist 1',
        owner: { connect: { id: 1 } }, // Assuming user IDs start at 1
      },
      {
        name: 'Playlist 2',
        description: 'Description for Playlist 2',
        owner: { connect: { id: 2 } },
      },
      {
        name: 'Playlist 3',
        description: 'Description for Playlist 3',
        owner: { connect: { id: 3 } },
      },
      // Add more playlists as needed
    ],
  });

  console.log('Database seeded with users, tracks, and playlists.');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
