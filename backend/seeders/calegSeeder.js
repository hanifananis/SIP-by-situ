import fs from 'fs';
import CalonDPR from '../models/CalonDPR.js'; // Adjust the path as needed

const jsonData = fs.readFileSync(new URL('daftar_calon_dpr.json', import.meta.url), 'utf8');
const daftar_calon_dpr = JSON.parse(jsonData);

// Function to seed the election result data
const seedCaleg = async () => {
  try {
    await CalonDPR.deleteMany(); // Clear existing data

    await CalonDPR.insertMany(daftar_calon_dpr);

    console.log('Calon DPR seeded successfully.');
  } catch (error) {
    console.error('Error seeding election results:', error);
  }
};

// Seed the data
export { seedCaleg };