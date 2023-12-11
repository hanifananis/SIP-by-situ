import mongoose from 'mongoose';
import fs from 'fs';
import Pilpres2019 from '../models/Pilpres2019.js'; // Adjust the path as needed

const jsonData = fs.readFileSync(new URL('pilpres2019.json', import.meta.url), 'utf8');
const electionResultsData = JSON.parse(jsonData);
const convertedData = electionResultsData.map(entry => ({
    ...entry,
    Capres_01: Number(entry.Capres_01.replace(/,/g, '')),
    Capres_02: Number(entry.Capres_02.replace(/,/g, '')),
  }));

// Function to seed the election result data
const seedPilpres2019s = async () => {
  try {
    await Pilpres2019.deleteMany(); // Clear existing data

    await Pilpres2019.insertMany(convertedData);

    console.log('Election results seeded successfully.');
  } catch (error) {
    console.error('Error seeding election results:', error);
  }
};

// Seed the data
export { seedPilpres2019s };