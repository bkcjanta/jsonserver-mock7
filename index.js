const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.get("/", (req, res) => {
    res.jsonp({ msg: "working fine" })
})
server.use(middlewares);
server.use(router);
server.listen(4500, () => {
    console.log("JSON server is running on port 4500")
})
