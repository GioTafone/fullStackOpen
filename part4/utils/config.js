require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI_BLOG = process.env.MONGODB_URI_BLOG;

module.exports = {
  MONGODB_URI_BLOG,
  PORT,
};
