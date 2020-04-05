var qrpc = require("qrpc");

var client = qrpc.connect(1337, "localhost", function () {
  client.call("echo", { a: 1, b: 4, c: "test" }, function (err, ret) {
    console.log("Resposta do servidor: ", ret);
    if(err){
        console.log("Erro: ", err);
    }
  });
});
