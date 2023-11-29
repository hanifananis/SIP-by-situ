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
    const users = await User.find(); // Get all users from the database

    const forumsWithUserData = await Promise.all(forumData.map(async (forum) => {
      const randomUser = users[Math.floor(Math.random() * users.length)]; // Select a random user

      const newForum = new Forum({
        ...forum,
        penulis_id: randomUser._id,
      });

      const savedForum = await newForum.save();

      // Create a comment for each forum
      const newComment = new Comment({
        user_id: randomUser._id,
        content: faker.lorem.paragraph(),
        forum_id: savedForum._id,
      });

      await newComment.save();
      
      return savedForum;
    }));

    console.log('Forums data seeded successfully.');
  } catch (error) {
    console.error('Error seeding forum data:', error);
  }
}

export { seedForums };
