

"use strict";
const nodemailer = require("nodemailer");
exports.contact = function(req, res){
  var name = req.body.name;
  var from = req.body.from;
  var message = req.body.message;
  var to = 'akilisosa@gmail.com';
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
          user: "akilisosa@gmail.com",
          pass: "Ginger5@"
      }
  });
  var mailOptions = {
      from: from,
      to: to, 
      subject: name+' | new message !',
      text: message
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          res.redirect('/');
      }
  });
}

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "home695432287.1and1-data.host",
    port: 22,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'test@sosaanimationstudios.com', // generated ethereal user
      pass: 'Password2@' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Fred Foo 👻" <test@sosaanimationstudios.com>', // sender address
    to: "akili@sosaanimationstudios.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);