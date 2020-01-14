// Dependencies
const http=require('http');

http.createServer((request,response)=>{
  const { headers,method,url } =request;
  let body=[];
  request.on('error',(err)=>{
    // catch the error
    console.error(err);
  }).on('data',(chunk)=>{
    body.push(chunk);
  }).on('end',()=>{
    body=Buffer.concat(body).toString()
  });
  // Activates the server to listen on a port
}).listen(8000);
