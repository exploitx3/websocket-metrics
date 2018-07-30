const app = require("express")()
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 3030
const middlewares = require('./middlewares')


app.use(middlewares.allowCORS(`http://localhost:3000`))

app.get('/getData', function (req, res) {
  res.send({
    message: "Good Job Rest"
  })
});

  io.of('api-1.0')
  .on("connection", function (socket) {

    socket
      .on('getData', function (data, done) {
        done({
          message: "Good Job WS"
        })
      })

  });

server.listen(port, () => {
  console.info(`Server listening on ${port}`)
});