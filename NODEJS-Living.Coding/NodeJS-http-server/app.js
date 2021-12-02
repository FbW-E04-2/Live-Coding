const http = require("http");
const fs = require("fs");

//create http server
const server = http.createServer();

//listening for request
server.on("request", (req, res) => {
  console.log(req.url);
  /* create endpoints or routes */
  if (req.url === "/") {
    let index = fs.readFileSync("./index.html");
    res.write(index);
    res.end();
  }
  if (req.url === "/profile") {
    let profile = fs.readFileSync("./profile.html");
    res.write(profile);
    res.end();
  }
  if (req.url === "/contact") {
    let contact = fs.readFileSync("./contact.html");
    res.write(contact);
    res.end();
  }
  if(req.url==="/style.css"){
      res.write(fs.readFileSync("./style.css"))
      res.end()
  }
  if(req.url==="/user"){
      let user={name:"Naqvi",age:32}
      res.write(JSON.stringify(user))
      res.end()
  }
  if(req.url==="/users"){
    let users= fs.readFileSync("./data.json")
    res.write(users)
    res.end()
  }
});

//listening on port 4000
server.listen(4000);
