// Dependencies
const http=require('http');
const url=require('url');
let httpServer= http.createServer((request,response)=>{
  let parsedUrl=url.parse(request.url,true);
  // Get the path
  let path=parsedUrl.pathname;
  let trimmedPath=path.replace(/^\/+|\/+$/g,'');
  // Get the querystring as an object
  let queryStringObject=parsedUrl.query;
  // Get the Method
  let method=request.method.toLowerCase();
  // Get the headers of the Object
  let headers=request.headers;
  // get the payloads;
 let decoder=new StringDecoder('utf-8');
 var buffer='';
 request.on('error',(error)=>{
   console.error(error);
 }).on('data',(data)=>{
   buffer +=decoder.write(data);
 }).end('end',()=>{
   buffer +=decoder.end()
   // choose where the request should go
 })
});
httpServer.listen(8000,()=>{
  console.log('The server is listening on port',8000);
})
