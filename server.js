const express=require('express');
const app=express();
bodyParser=require("body-parser");
port=8090;
app.use(bodyParser.json());

const http=require('http');
app.use(express.static(__dirname + '/dist/DLA-UI'));
app.get('/*',(req,res)=>{
    res.sendFile(process.cwd()+"/dist/DLA-UI/index.html")
})
const server=http.createServer(app);
server.listen(port,()=>
console.log(`server running on port http://localhost:${port}!`),
)