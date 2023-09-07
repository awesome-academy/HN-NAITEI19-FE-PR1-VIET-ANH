const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");
server.use(middlewares);
server.use(router);
server.use(bodyParser.json());
server.listen(3000, () => {
  console.log("JSON Server is running");
});
