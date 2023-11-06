import mongoose from 'mongoose';
import Paslon from '../models/Paslon.js';
import dotenv from 'dotenv';

dotenv.config();

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI+'/'+process.env.MONGO_DBNAME, mongoOptions);

const paslonData = [
  {
    capres: 'Prabowo Subianto',
    cawapres: 'Gibran Rakabuming',
    no_urut: 1,
    deskripsi: '',
    visi: 'Visi Paslon 1',
    misi: 'Misi Paslon 1',
    partai_pengusung: 'Partai A',
    capres_img_url: 'https://example.com/paslon1.jpg',
    cawapres_img_url: 'https://example.com/paslon1.jpg',
  },
  {
    capres: 'capres Paslon 2',
    cawapres: 'capres Paslon 2',
    no_urut: 2,
    deskripsi: 'Deskripsi Paslon 2',
    visi: 'Visi Paslon 2',
    misi: 'Misi Paslon 2',
    partai_pengusung: 'Partai B',
    capres_img_url: 'https://example.com/paslon2.jpg',
    cawapres_img_url: 'https://example.com/paslon2.jpg',
  },
  {
    capres: 'paslon 3',
    cawapres: 'paslon 3',
    no_urut: 1,
    deskripsi: '',
    visi: 'Visi Paslon 3',
    misi: 'Misi Paslon 3',
    partai_pengusung: 'Partai A',
    capres_img_url: 'https://example.com/paslon1.jpg',
    cawapres_img_url: 'https://example.com/paslon1.jpg',
  },
  {
    capres: 'capres Paslon 4',
    cawapres: 'capres Paslon 4',
    no_urut: 2,
    deskripsi: 'Deskripsi Paslon 4',
    visi: 'Visi Paslon 4',
    misi: 'Misi Paslon 4',
    partai_pengusung: 'Partai B',
    capres_img_url: 'https://example.com/paslon2.jpg',
    cawapres_img_url: 'https://example.com/paslon2.jpg',
  },
  // Add more data objects here
];

async function seedPaslon() {
  try {
    // Remove existing documents in the collection (optional)
    await Paslon.deleteMany();

    // Insert the data into the collection
    await Paslon.insertMany(paslonData);

    console.log('Paslon successfully seeded.');
  } catch (error) {
    console.error('Error seeding Paslon:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedPaslon();
