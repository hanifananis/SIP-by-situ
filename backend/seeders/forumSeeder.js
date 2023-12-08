// forumSeeder.js
import mongoose from 'mongoose';
import Forum from '../models/Forum.js';
import Comment from '../models/Comment.js'; // Assuming you have a Comment model
import User from '../models/User.js';
import faker from 'faker';

const forumData = [
  {
    judul: 'Forum 1',
    isi: 'Isi dari forum pertama',
    penulis_id: 'user1_id', // Replace with an actual user ID
  },
  {
    judul: 'Forum 2',
    isi: 'Isi dari forum kedua',
    penulis_id: 'admin_id', // Replace with an actual user ID
  },
  // Add other forum data as needed
];

async function seedForums() {
  try {
    // Clear existing forum and comment data
    await Forum.deleteMany();
    await Comment.deleteMany();

    // Get user IDs from the existing users or use your own logic
    const allUsers = await User.find();

    // Seed forums
    for (const forumInfo of forumData) {
      const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];

      const forum = await Forum.create({
        ...forumInfo,
        penulis_id: randomUser._id,
      });

      // Seed comments and replies for each forum
      for (let j = 0; j < 3; j++) {
        const comment = await Comment.create({
          penulis_id: randomUser._id,
          content: `Comment ${j + 1} on ${forumInfo.judul}`,
          forum_id: forum._id,
        });

        // Seed replies for each comment
        for (let k = 0; k < 2; k++) {
          await Comment.findByIdAndUpdate(
            comment._id,
            {
              $push: {
                replies: {
                  penulis_id: randomUser._id,
                  content: `Reply ${k + 1} on Comment ${j + 1} in ${forumInfo.judul}`,
                },
              },
            },
            { new: true }
          );
        }
      }
    }

    console.log('Forums data successfully seeded.');
  } catch (error) {
    console.error('Error seeding Forums:', error);
  }
}

export { seedForums };
