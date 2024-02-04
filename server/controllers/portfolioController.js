import nodemailer from "nodemailer";

export const sendEmailData = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 587,
      secure: false,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "kamalbsr2101@gmail.com",
        pass: process.env.AUTH_PASSWORD,
      },
    });
    //
    const info = await transporter.sendMail({
      from: "<kamal@gmail.com>", // sender address
      to: req.body, // list of receivers
      subject: "Hello ✔", // Subject line
      text: req.body, // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    if (!info.success) {
      res.send("Mail is not send successfully");
    }

    res.status(200).json({
      success: true,
      message: "Mail send successfully",
      info,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in sendEmail data",
      error,
    });
  }
};
