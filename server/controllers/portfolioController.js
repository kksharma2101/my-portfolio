export const sendEmailData = (req, res) => {
  try {
    res.send("send email successfully");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in sendEmail data",
      error,
    });
  }
};
