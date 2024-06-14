let nodeMailer = require("nodemailer")

module.exports = async (userEmail,subject,htmltemplet)=>{
        let transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.adminemail,
            pass:process.env.adminpassword
        }
    })
    let mailoption = {
        from:process.env.adminemail,
            to :userEmail,
            subject:subject,
            html:htmltemplet
    }
    let info = await transporter.sendMail(mailoption);
    
}