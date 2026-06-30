const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: `TourPro Travels <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      html: options.html,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', options.email);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};

module.exports = sendEmail;
