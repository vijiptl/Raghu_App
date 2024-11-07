import { transport, sender } from "./mail.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailtemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [email];

  if (!recipients) {
    throw new Error("Recipient email is required");
  }

  try {
    const response = transport
      .sendMail({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        html: VERIFICATION_EMAIL_TEMPLATE.replace(
          "{verificationCode}",
          verificationToken
        ),
        category: "Integration Test",
      })
      .then(console.log, console.error);

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log("Error sending verification", error);
    throw new error(`Error sending verification email ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const recipients = [email];

  try {
    const response = transport
      .sendMail({
        from: sender,
        to: recipients,
        subject: "Reset your Password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
        category: "Password Reset",
      })
      .then(console.log, console.error);

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset email", error);
    throw new error(`Error sending password reset email ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipients = [email];
  try {
    const response = transport
      .sendMail({
        from: sender,
        to: recipients,
        subject: "Password reset successful",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        category: "Password Reset",
      })
      .then(console.log, console.error);

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset success  email", error);
    throw new error(`Error sending password reset success email ${error}`);
  }
};
