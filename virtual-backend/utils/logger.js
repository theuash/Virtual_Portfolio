const winston = require('winston');
const config = require('../config/environment');

const { combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: config.NODE_ENV === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        myFormat
      )
    }),
    // In production, we could also log to files
    // new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'logs/combined.log' })
  ],
});

module.exports = logger;
