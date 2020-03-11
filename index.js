const express = require("express");
const postrouter = require("./router/postrouter");
const port = 4000;
const server = express();

server.use(express.json());
server.use("/api/posts", postrouter);

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});