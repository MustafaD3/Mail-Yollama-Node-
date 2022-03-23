const http = require("http")
const mail = require("./mailSendClass.js")
const mailClass = new mail()

const server = http.createServer((req,res)=>{
    console.log("İstek Geldi")
    if(req.url ==="/" && req.method === "POST"){
        req.on("data",function (data2) {
            const jsonData = JSON.parse(data2)
            mailClass.options(jsonData)
        })
    }
})
server.listen(3000)