// Import your seeders
import { seedUsers } from './userSeeder.js';
import { seedPartaiInfos } from './partaiInfoSeeder.js';
import mongoose from 'mongoose';

var mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

if(process.env.MONGO_URI){
    mongoose.connect(process.env.MONGO_URI + '/' + process.env.MONGO_DBNAME,mongoOptions);
} else{
    mongoose.connect('mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DBNAME,mongoOptions);

}

// Define a function to run all seeders
async function runAllSeeders() {
  try {
    // Run the user seeder
    await seedUsers();

    // Run the partaiInfo seeder
    await seedPartaiInfos();

    console.log('All seeders executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    // Close database connections or perform any necessary cleanup
    // if applicable to your project
    mongoose.disconnect();

  }
}

// Call the function to run all seeders
runAllSeeders();
