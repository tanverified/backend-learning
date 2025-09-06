const mongoose = require("mongoose");
const { Schema } = mongoose;

//# Connect
mongoose
  .connect(
    "mongodb+srv://tanveerkhan_db_user:KxEDT8Mc9mRg9IOL@cluster0.byxqczc.mongodb.net/"
  )
  .then(() => console.log("Database is connected ⏳"))
  .catch((err) => console.error(err));

//# Schema
const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//# Model
const User = mongoose.model("User", userSchema);

//# Query
const runQueryExample = async () => {
  try {
    // * #1 create
    // const newUser = await User.create({
    //   name: "Tanveer khan",
    //   email: "contact@tanveer.tech",
    //   age: 29,
    //   isActive: true,
    //   tags: ["developer", "full-stack", "react", "node", "express"],
    // });
    // console.log("New user created: ", newUser);
    // * #2 save
    const newUser = new User({
      name: "Tanveer",
      email: "connect@tanveer.tech",
      age: 28,
      isActive: true,
      tags: ["developer", "full-stack", "react", "node", "express"],
    });
    await newUser.save();
    console.log("New user created: ", newUser);
  } catch (error) {
    console.log("Error in query", error);
  } finally {
    await mongoose.connection.close();
  }
};

runQueryExample();
