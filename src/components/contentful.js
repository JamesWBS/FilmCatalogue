const contentful = require("contentful");

export default contentful.createClient({
  space: "urbqh1hb6wqe",
  environment: "master", // defaults to 'master' if not set
  accessToken: "coiDLdm2vvO1TW3GWWucYBvGC-wemSl-DaTHCkWnf3E"
});
