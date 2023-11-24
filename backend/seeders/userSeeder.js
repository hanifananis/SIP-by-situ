import User from '../models/User.js'; // Sesuaikan dengan path model User Anda
import argon2 from 'argon2';

const userData = [
  {
    name: 'User 1',
    email: 'user1@example.com',
    password: 'password123', // Kata sandi langsung, tidak perlu di-hash lagi
    no_telp: '1234567890',
    roles: 'user',
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'adminpassword',
    no_telp: '9876543210',
    roles: 'admin',
  },
];

// Function to hash passwords using argon2
    async function hashPassword(password) {
        const saltRounds = 10;
        return argon2.hash(password, saltRounds);
    }
  
  // Function to seed the user data
async function seedUsers() {
    try {
    await User.deleteMany(); // Clear the existing user data

    const hashedUserData = await Promise.all(userData.map(async (user) => {
        return {
        ...user,
        password: await hashPassword(user.password),
        };
    }));

    await User.insertMany(hashedUserData);

    console.log('User data seeded successfully.');
    } catch (error) {
    console.error('Error seeding user data:', error);
    }
}

export { seedUsers };