const ENGINE_DB=process.env.ENGINE_DB;
const pathModel = ENGINE_DB === "nosql" ? "./nosql" : "./mysql"
const models = {
    userModel: require(`${pathModel}/users`),
    storageModel: require(`${pathModel}/storage`),
    tracksModel: require(`${pathModel}/tracks`),
  };
module.exports = models;