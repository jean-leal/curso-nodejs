const http = require('http');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const server = http.createServer(
  function(req,res){
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html; charset=utf8');
    res.end('<h1>Olá Mundo! </h1>')
  }
)
server.listen(PORT, hostname, function(){
  console.log(`Servidor rodando em http://${hostname}:${PORT}`);
})
