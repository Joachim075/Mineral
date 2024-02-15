// functions/bookAppointment.js

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Use nodemailer to send an email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kafujohn@gmail.com',
        pass: 'dontycoon',
      },
    });

    const mailOptions = {
      from: 'kafujohn@gmail.com',
      to: 'douglasothieno@gmail.com',
      subject: 'New Appointment Booking',
      text: `
        Full Name: ${data.fullName}
        Email: ${data.email}
        Phone Number: ${data.phoneNumber}
        Preferred Date: ${data.preferredDate}
        Preferred Time: ${data.preferredTime}
        Health Specialty: ${data.healthSpecialty}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
