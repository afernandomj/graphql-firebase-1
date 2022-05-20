const fetch = require("cross-fetch");
const config = require("./config");
const userProfile = require("../FirebaseFunctions/userProfile");

const baseUrl = config.firebaseDatabaseUrl;

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch(`${baseUrl}/users.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map((item) => {
        const userData = dataJson[item];
        const graphqlUser = userProfile(userData);
        return graphqlUser;
      });
      return mapsKeys;
    },
  },
};

module.exports = resolvers;
