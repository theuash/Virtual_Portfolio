require('dotenv').config();
const mongoose = require('mongoose');
const logger = require('../utils/logger');
const Member = require('../models/Member');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

const members = require('./seedMembers');
const projects = require('./seedProjects');
const testimonials = require('./seedTestimonials');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => logger.info(`MongoDB Connected: ${process.env.MONGODB_URI}`))
  .catch(err => {
    logger.error(`Error connecting to DB: ${err}`);
    process.exit(1);
  });

const importData = async () => {
  try {
    await Member.deleteMany();
    await Project.deleteMany();
    await Testimonial.deleteMany();

    await Member.insertMany(members);
    await Project.insertMany(projects);
    await Testimonial.insertMany(testimonials);

    logger.info('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    logger.error(`❌ Error with Data Import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Member.deleteMany();
    await Project.deleteMany();
    await Testimonial.deleteMany();

    logger.info('🗑️ Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    logger.error(`❌ Error with Data Destroy: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
