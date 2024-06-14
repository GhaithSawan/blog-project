const mongoose = require("mongoose");
module.exports = async () => {
  try {
    // استبدل 'test' باسم قاعدة البيانات التي ترغب في استخدامها
    const dbURI = `${process.env.DB}`;
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB Connected successfully");
  } catch (error) {
    console.log("DB connection error:", error);
  }
};
