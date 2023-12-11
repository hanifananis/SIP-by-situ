import mongoose from 'mongoose';
import fs from 'fs';
import HasilDPR2019 from '../models/HasilDPR2019.js'; // Adjust the path as needed

const jsonData = fs.readFileSync(new URL('suaraDPR2019.json', import.meta.url), 'utf8');
const dataDPR2019 = JSON.parse(jsonData);
const convertedData = dataDPR2019.map(entry => {
    const convertedEntry = { Wilayah: entry.Wilayah };
  
    for (const key in entry) {
      if (key !== 'Wilayah') {
        convertedEntry[key] = Number(entry[key].replace(/,/g, ''));
      }
    }
  
    return convertedEntry;
  });
// Function to seed the election result data
const seedDPR2019s = async () => {
  try {
    await HasilDPR2019.deleteMany(); // Clear existing data

    await HasilDPR2019.insertMany(convertedData);

    console.log('Suara DPR seeded successfully.');
  } catch (error) {
    console.error('Error seeding Suara DPR:', error);
  }
};

// Seed the data
export { seedDPR2019s };