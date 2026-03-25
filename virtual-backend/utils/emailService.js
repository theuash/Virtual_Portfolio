const nodemailer = require('nodemailer');
const config = require('../config/environment');
const logger = require('./logger');

const transporter = nodemailer.createTransport({
  host: config.SMTP.host,
  port: config.SMTP.port,
  secure: config.SMTP.port === 465, // true for 465, false for 587
  auth: {
    user: config.SMTP.user,
    pass: config.SMTP.pass,
  },
});

const sendContactEmail = async (contactData, targetEmail = config.NOTIFY_EMAIL) => {
  // If SMTP is not configured, just log to console
  if (!config.SMTP.user || !config.SMTP.pass) {
    logger.info(`[Email Mock] Would send email to ${targetEmail} from ${contactData.email}. Subject: ${contactData.subject}`);
    return true; // Simulate success
  }

  try {
    const textMsg = `
      New Contact Form Submission
      
      Name: ${contactData.name}
      Email: ${contactData.email}
      Company: ${contactData.company || 'N/A'}
      Phone: ${contactData.phone || 'N/A'}
      
      Message:
      ${contactData.message}
    `;

    await transporter.sendMail({
      from: `"VIRTUAL Portfolio API" <${config.SMTP.user}>`,
      to: targetEmail,
      subject: `New Contact: ${contactData.subject}`,
      text: textMsg,
    });
    
    logger.info(`Email sent successfully to ${targetEmail}`);
    return true;
  } catch (err) {
    logger.error(`Error sending email: ${err.message}`);
    return false;
  }
};

module.exports = {
  sendContactEmail
};
