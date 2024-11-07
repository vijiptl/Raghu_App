import Nodemailer from "nodemailer";
import dotenv from "dotenv";
import { MailtrapTransport } from "mailtrap";
// import { VERIFICATION_EMAIL_TEMPLATE } from "./emailtemplates.js";
dotenv.config();

const TOKEN = process.env.MAIL_TOKEN;

export const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const sender = {
  address: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};

// const recipients = ["raghua7795@gmail.com"];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

// Test Email function

// export const sendVerificationEmail1 = async (email, verificationToken) => {
//   const recipients = [email];
//   if (!recipients) {
//     throw new Error("Recipient email is required");
//   }

//   const transport = Nodemailer.createTransport(
//     MailtrapTransport({
//       token: TOKEN,
//     })
//   );

//   const sender = {
//     address: "hello@demomailtrap.com",
//     name: "Mailtrap Test",
//   };

//   transport
//     .sendMail({
//       from: sender,
//       to: email,
//       subject: "You are awesome!",
//       text: "Congrats for sending test email with Mailtrap!",
//       html: VERIFICATION_EMAIL_TEMPLATE.replace(
//         "{verificationCode}",
//         verificationToken
//       ),
//       category: "Integration Test",
//     })
//     .then(console.log, console.error);
// };
