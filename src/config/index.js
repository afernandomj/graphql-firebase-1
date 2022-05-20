const dotenv = require("dotenv");
dotenv.config();

const config = {
  firebaseDatabaseUrl: process.env.FIREBASE_DB_URL,
  firebaseApiKey: process.env.FIREBASE_APIKEY,
  firebaseAuthDomain: process.env.FIREBASE_AUTH,
  firebaseProjectId: process.env.FIREBASE_PROJECTID,
  appPort: process.env.PORT,
};

module.exports = config;
