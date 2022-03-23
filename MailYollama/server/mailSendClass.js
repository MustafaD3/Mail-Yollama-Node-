class mail{
    constructor(){
        this.nodemailer = require("nodemailer")
    }
    options(object){
        const transport = this.nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:object.username,
                pass:object.password
            }
        })
        this.sendMail2(transport,object)
    }
    sendMail2(transport,data){
        
        const option = {
            from:data.username,
            to:data.user,
            subject:data.title,
            text:data.message
        }
        transport.sendMail(option,(error,data)=>{
            if(error)console.log(error)
            else console.log("İşlem Başarılı")
        })
        
    }
}
module.exports = mail