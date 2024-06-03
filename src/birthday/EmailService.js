import nodemailer from "nodemailer";

export class EmailService {
  constructor(smtpUrl, smtpPort, senderEmail, auth) {
    this.smtpUrl = smtpUrl;
    this.smtpPort = smtpPort;
    this.senderEmail = senderEmail;
    this.transporter = nodemailer.createTransport({
      host: smtpUrl,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: auth,
    });
  }

  sendBirthdayGreeting(employee) {
    const message = {
      from: this.senderEmail,
      to: employee.getEmail(),
      subject: "Happy Birthday!",
      text: `Happy Birthday, dear ${employee.getFirstName()}!`,
    };

    this.transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("EMAIL SENT TO: " + employee.getEmail());
      }
    });
  }
}
