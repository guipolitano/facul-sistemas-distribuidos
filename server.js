var qrpc = require("qrpc"); //Importa o pacote responsável pelo rpc
var server = qrpc.createServer(); // Cria o Server

/**
 * @param req Requisicao que chega no servidor
 * @param res Resposta do servidor
 * @param next Indica para ir para o próximo da fila
 */
server.addHandler("echo", function (req, res, next) {
  var err = null; // Trata caso haja um erro
  res.write("Teste rodando!"); // Primeira Resposta

  if(typeof req.m.a !== "number" || typeof req.m.b !== "number"){
    err = "Os valores de A e B tem que ser numéricos!";
}else{
    res.write("Resultado de A + B = " + (req.m.a + req.m.b));
}
  next(err, req.m); // Resposta final, passando para a próxima
});

server.listen(1337, function () {
  console.log("Servidor rodando na porta 1337");
});
