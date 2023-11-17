import mongoose from 'mongoose';
import User from '../models/User.js'; // Sesuaikan path model User
import Forum from '../models/Forum.js';
import argon2 from 'argon2';

// Function to hash passwords using argon2
async function hashPassword(password) {
  const saltRounds = 10;
  return argon2.hash(password, { saltLength: saltRounds });
}

// Seed data for forums
const forumData = [
  {
    judul: 'Topik 1',
    isi: 'Isi dari topik pertama',
    komentar: [
      {
        user: null, // Jika ingin menambahkan komentar tanpa user tertentu
        content: 'Komentar 1 untuk Topik 1',
        replies: [
          {
            user: null, // Jika ingin menambahkan balasan tanpa user tertentu
            content: 'Balasan 1 untuk Komentar 1',
          },
        ],
      },
      // ... (tambahkan komentar dan balasan lainnya jika diperlukan)
    ],
  },
  {
    judul: 'Topik 2',
    isi: 'Isi dari topik kedua',
    komentar: [
      {
        user: null, // Jika ingin menambahkan komentar tanpa user tertentu
        content: 'Komentar 1 untuk Topik 2',
        replies: [
          {
            user: null, // Jika ingin menambahkan balasan tanpa user tertentu
            content: 'Balasan 1 untuk Komentar 1',
          },
        ],
      },
      // ... (tambahkan komentar dan balasan lainnya jika diperlukan)
    ],
  },
  {
    judul: 'Topik 3',
    isi: 'Isi dari topik ketiga',
    komentar: [
      {
        user: null, // Jika ingin menambahkan komentar tanpa user tertentu
        content: 'Komentar 1 untuk Topik 3',
        replies: [
          {
            user: null, // Jika ingin menambahkan balasan tanpa user tertentu
            content: 'Balasan 1 untuk Komentar 1',
          },
        ],
      },
      // ... (tambahkan komentar dan balasan lainnya jika diperlukan)
    ],
  },
  // ... (tambahkan data topik lainnya jika diperlukan)
];

// Seed function for forums and comments
async function seedForumsAndComments() {
  try {
    await Forum.deleteMany(); // Clear existing forum data

    const users = await User.find(); // Ambil semua user

    const forumsWithAuthorAndComments = forumData.map((forum) => {
      const user = users[Math.floor(Math.random() * users.length)]; // Pilih user secara acak
      return {
        ...forum,
        penulis: user._id,
        komentar: forum.komentar.map((comment) => ({
          ...comment,
          user: user._id,
          replies: comment.replies.map((reply) => ({
            ...reply,
            user: user._id,
          })),
        })),
      };
    });

    await Forum.insertMany(forumsWithAuthorAndComments);

    console.log('Forum data seeded successfully.');
  } catch (error) {
    console.error('Error seeding forum data:', error);
  }
}

export { seedForumsAndComments };
